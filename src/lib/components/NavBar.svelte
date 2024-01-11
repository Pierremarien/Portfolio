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
	
</style>
