<script lang="ts">
  import { link } from "svelte-routing";
  import routes from "config/routes";
</script>

<header class="header">
  <nav class="navigation">
    <ul class="menu reset-list">
      {#each routes as { href, label, icon }}
        <li class="menu__list">
          <a class="menu__link" {href} aria-label={label} use:link>
            {icon || label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--primary-color);
    padding: var(--separation);
    margin-bottom: 0.25rem;
  }

  .menu {
    display: flex;
    gap: 1rem;
  }
</style>
