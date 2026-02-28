export async function submitToFormspree(
  formId: string,
  data: Record<string, string>
): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        ok: false,
        error: errorData?.errors?.[0]?.message || 'Submission failed. Please try again.',
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection.' };
  }
}
