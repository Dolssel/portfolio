// Shared type definitions. If you know C# interfaces, you already know these:
// a contract describing the SHAPE an object must have. Nothing is generated at
// runtime — types exist only at compile time to catch mistakes in the editor.

export interface Skill {
  id: string;
  title: string;
  description: string;
  items: string[]; // an array of strings
}

export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  tags: string[];
  featured?: boolean; // the "?" means optional — a project may or may not have it
}
