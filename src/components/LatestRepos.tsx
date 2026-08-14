import { useQuery } from "@tanstack/react-query";
import Section from "./Section";

// Only the fields we actually use from GitHub's (much bigger) response.
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

const USERNAME = "gaearon"; // ← your GitHub username

// Just the fetch logic — no React, no state. Returns data or throws.
async function fetchRepos(username: string): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
  );
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
  return res.json();
}

export default function LatestRepos() {
  const {
    data: repos,   // the fetched data (renamed to `repos`)
    isPending,     // true while first load is in flight
    isError,       // true if the queryFn threw
    error,         // the thrown Error
  } = useQuery({
    queryKey: ["repos", USERNAME],       // unique id for this data (cache key)
    queryFn: () => fetchRepos(USERNAME), // how to get it
  });

  return (
    <Section id="repos" number="05." title="Latest on GitHub">
      {isPending  && <p className="contact-text">Loading repos…</p>}

      {isError && (
        <p className="contact-text">⚠️ Couldn't load repos: {error.message}</p>
      )}

      {!isPending && !isError && repos.length === 0 && (
        <p className="contact-text">No public repositories yet.</p>
      )}

      {!isPending && !isError && repos.length > 0 && (
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id} className="repo-item">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
              {repo.language && <span> · {repo.language}</span>}
              {repo.description && <p className="repo-desc">{repo.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}