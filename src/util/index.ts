export async function getData<T>(url: string): Promise<T> | never {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error("Cannot get Data ");
  }
}
