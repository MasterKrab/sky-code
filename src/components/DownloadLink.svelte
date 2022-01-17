<script lang="ts">
  import download from "assets/icons/download.svg";
  export let code: string;
</script>

<a
  href="data:text/javascript;charset=utf-8,{code}"
  download="code"
  aria-label="Download Code"
  data-label="Download Code"
  class="left-bar-button"
>
  <img src={download} alt="Download" />
</a>
