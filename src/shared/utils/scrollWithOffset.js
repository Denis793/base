export const scrollWithOffset = (el) => {
  if (!el) return;

  try {
    const spacingVar = getComputedStyle(document.documentElement).getPropertyValue('--spacing-4xl')?.trim();

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const spacingOffset = spacingVar.endsWith('rem')
      ? parseFloat(spacingVar) * rootFontSize
      : parseFloat(spacingVar) || 20;

    const y = el.getBoundingClientRect().top + window.pageYOffset - spacingOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  } catch (error) {
    console.warn('scrollWithOffset error:', error);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
