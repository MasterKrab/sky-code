<script lang="ts">
  import formatterColors from "config/formatterColors";

  export let data: any;

  export let options = formatterColors;

  let element: HTMLElement;
  let fragment: DocumentFragment = document.createDocumentFragment();

  const scapeString = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>")
      .replace(/\s/g, "&nbsp;");

  const createText = (text: string) => {
    const node = document.createTextNode(text);
    fragment.appendChild(node);
  };

  const createSpan = (text: string, color?: string, html?: boolean) => {
    const span = document.createElement("span");

    if (color) span.style.color = color;

    if (html) span.innerHTML = scapeString(text);
    else span.textContent = text;

    fragment.appendChild(span);
  };

  const stringify = (data: any) => {
    const type = typeof data;
    console.log(data);

    if (data === null || data === undefined || type === "boolean") {
      return createSpan(`${data}`, options.boolean);
    }

    if (type === "string") {
      return createSpan(data, options.string, true);
    }

    if (type === "number") {
      return createSpan(`${data}`, options.number);
    }

    if (type === "function") {
      const isAnonymous = (fn: Function) =>
        /^function ([^\s]+) \(\)/.test(fn.toString());

      let name = data.displayName;

      if (isAnonymous(data)) name = "Anonymous function()";
      if (!name) name = `function ${data.name}()`;

      createText(name);
      return;
    }

    if (Array.isArray(data)) {
      createText("[");

      data.forEach((value, index) => {
        format(value);
        if (index + 1 < data.length) createText(", ");
      });

      createText("]");
      return;
    }

    createText("{");

    const entries = Object.entries(data);

    entries.forEach(([key, value], index) => {
      createSpan(` "${key}": `, options.key);

      format(value);

      if (index + 1 < entries.length) createText(", ");
    });

    createText(" }");
  };

  function format(data: any) {
    const type = typeof data;

    if (data === null || data === undefined || type === "boolean") {
      createSpan(`${data}`, options.boolean);
    } else if (type === "object" || Array.isArray(data)) {
      stringify(data);
    } else if (type === "string") {
      createSpan(`"${data}"`, options.string);
    } else if (type === "number") {
      createSpan(`${data}`, options.number);
    } else if (type === "function") {
      const isAnonymous = (fn: Function) =>
        /^function ([^\s]+) \(\)/.test(fn.toString());

      let name = data.displayName;

      if (!isAnonymous(data)) name = "Function()";
      if (!name) name = `Function ${data.name}()`;

      createText(name);
    }
  }

  const printData = (data: any, element: HTMLElement) => {
    if (data === undefined || !element) return;

    fragment.textContent = "";

    stringify(data);

    element.textContent = "";
    element.appendChild(fragment);
  };

  $: printData(data, element);
</script>

<span bind:this={element} />
