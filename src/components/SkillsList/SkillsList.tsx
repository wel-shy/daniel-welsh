import React from "react";
import { SimpleGrid, Title } from "@mantine/core";
import useData from "./useData";

// Deterministic 32-bit hash so the generated "file" metadata is stable between
// SSR and client render (avoids hydration mismatches).
const hash = (value: string) => {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) {
    h = (h * 31 + value.charCodeAt(i)) >>> 0;
  }
  return h;
};

// Turn a skill name into a plausible-looking `ls -la` row.
const toEntry = (name: string, executable: boolean) => {
  const h = hash(name);
  const sizeK = (((h >> 3) % 90) + 10) / 10; // 1.0K – 9.9K

  return {
    perms: executable ? "-rwxr-xr-x" : "-rw-r--r--",
    sizeK,
    size: `${sizeK.toFixed(1)}K`,
    name,
  };
};

interface ListingProps {
  path: string;
  skills: string[];
  executable: boolean;
}

const Listing = ({ path, skills, executable }: ListingProps) => {
  const entries = skills.map((skill) => toEntry(skill, executable));
  const total = `${entries
    .reduce((sum, entry) => sum + entry.sizeK, 0)
    .toFixed(1)}K`;

  const dim = { opacity: 0.55 };

  return (
    <div
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.85em",
        lineHeight: 1.7,
        overflowX: "auto",
      }}
    >
      <div style={{ marginBottom: "0.5em" }}>
        <span style={{ color: "var(--app-accent)" }}>~ ❯</span> ls -la {path}
      </div>
      <div style={dim}>total {total}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, max-content) 1fr",
          columnGap: "1ch",
          whiteSpace: "nowrap",
        }}
      >
        {[".", ".."].map((dir) => (
          <React.Fragment key={dir}>
            <span style={dim}>drwxr-xr-x</span>
            <span style={{ ...dim, textAlign: "right" }}>-</span>
            <span style={dim}>{dir}</span>
          </React.Fragment>
        ))}
        {entries.map((entry) => (
          <React.Fragment key={entry.name}>
            <span style={dim}>{entry.perms}</span>
            <span style={{ ...dim, textAlign: "right" }}>{entry.size}</span>
            <span style={{ color: "var(--app-text)" }}>{entry.name}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const SkillsList = () => {
  const { primarySkills, secondarySkills } = useData();

  return (
    <div>
      <Title order={2} mb="md">
        Skills
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Listing path="skills/technical" skills={primarySkills} executable />
        <Listing
          path="skills/product"
          skills={secondarySkills}
          executable={false}
        />
      </SimpleGrid>
    </div>
  );
};

export default SkillsList;
