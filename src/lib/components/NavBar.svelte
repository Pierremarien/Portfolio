<script lang="ts">
import { Buttons } from "$lib";
import projects from "$lib/assets/projects.svg";
import about from "$lib/assets/about.png";
import contact from "$lib/assets/contact.svg";
import home from "$lib/assets/home.svg";
</script>

<div class="navbar">
	<div class="navbar__links">
        <Buttons
            links={["#", "#", "#", "#"]}
            icons={[home, projects, about, contact]}
            altIcons={["home", "projects", "about", "contact"]}
        />
	</div>
</div>

<style lang="scss">
	.navbar{

        &__links{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 1rem;
            gap: 1rem;
        }
    }
</style>
