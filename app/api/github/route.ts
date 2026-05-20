import { NextResponse } from 'next/server';

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || 'akshaykeerthi3301-rgb';
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!userRes.ok) throw new Error('GitHub API error');
    const user = await userRes.json();

    // Fetch pinned/recent repos
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
      { headers }
    );
    const repos = reposRes.ok ? await reposRes.json() : [];

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + (r.stargazers_count || 0), 0)
      : 0;

    return NextResponse.json({
      username: user.login,
      name: user.name,
      avatar: user.avatar_url,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      totalStars,
      profileUrl: user.html_url,
      repos: Array.isArray(repos)
        ? repos.slice(0, 6).map((r: { name: string; description: string; html_url: string; language: string; stargazers_count: number; forks_count: number }) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            language: r.language,
            stars: r.stargazers_count,
            forks: r.forks_count,
          }))
        : [],
    });
  } catch (e) {
    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats', message: String(e) },
      { status: 500 }
    );
  }
}
