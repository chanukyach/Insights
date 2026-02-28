export async function getDiscussionCommentCount(slug: string): Promise<number> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return 0;

    const query = `
    query($searchQuery: String!) {
      search(query: $searchQuery, type: DISCUSSION, first: 1) {
        edges {
          node {
            ... on Discussion {
              comments {
                totalCount
              }
            }
          }
        }
      }
    }
  `;

    const searchQuery = `repo:chanukyach/insights-comments "/blog/${slug}" in:title`;

    try {
        const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { searchQuery },
            }),
            next: { revalidate: 60 } // Cache results to prevent rate limiting
        });

        if (!res.ok) {
            return 0;
        }

        const data = await res.json();
        const edges = data?.data?.search?.edges;
        if (edges && edges.length > 0) {
            return edges[0].node.comments?.totalCount || 0;
        }

        return 0;
    } catch (err) {
        return 0;
    }
}
