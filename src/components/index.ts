export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  protected templateElement: HTMLTemplateElement;
  protected hostElement: T;
  protected element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId) as T;
    const clonedNode = this.templateElement.content.cloneNode(
      true
    ) as HTMLElement;

    this.element = clonedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
  }

  render() {
    this.hostElement.appendChild(this.element);
  }
}
