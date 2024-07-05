export const getElementProperty = (element) => {
  // Get the computed styles for the element
  const computedStyle = window.getComputedStyle(element);

  // Get the element's height
  const height = element.clientHeight;

  // Subtract the padding
  const paddingTop = parseFloat(computedStyle.paddingTop);
  const paddingBottom = parseFloat(computedStyle.paddingBottom);

  // Calculate the actual height
  const actualHeight = height - paddingTop - paddingBottom;

  return {
    actualHeight,
    paddingTop,
    paddingBottom
  }
}