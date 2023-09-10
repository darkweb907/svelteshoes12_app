import { c as create_ssr_component } from "./ssr.js";
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".footer.svelte-u3hftc{background-color:black}.footer-content.svelte-u3hftc{max-width:1200px;margin:0 auto;padding:2rem;display:flex;flex-direction:column;justify-content:center;align-items:center}.footer-div.svelte-u3hftc{width:100%;padding:1rem;margin-bottom:1rem;background-color:black;color:white}@media(min-width: 640px){.footer-content.svelte-u3hftc{flex-direction:row}.footer-div.svelte-u3hftc{flex:1;margin:0 0.5rem;margin-bottom:0}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="footer bg-black svelte-u3hftc" id="ring" data-svelte-h="svelte-qnrv6v"><div class="footer-content svelte-u3hftc"><div class="footer-div leading-7 svelte-u3hftc"><h3 class="text-xl font-semibold mb-2 text-white">About Interior</h3> <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo augue vel neque
				malesuada.</p> <div class="flex space-x-4"><a href="https://www.facebook.com/profile.php?id=100074675780177" class="text-white"><i class="fab fa-facebook fa-lg"></i></a> <a href="https://twitter.com/odumosusegun3?t=KB89K68c5dx79EouhdgA6w&s=09" class="text-white"><i class="fab fa-twitter fa-lg"></i></a> <a href="https://www.instagram.com/invites/contact/?i=1g3cmxgu0lp1j&utm_content=hrhdrx0" class="text-white"><i class="fab fa-instagram fa-lg"></i></a></div></div> <div class="footer-div svelte-u3hftc"><h3 class="text-xl font-semibold mb-2 text-white">Contact Us</h3> <p class="text-white leading-6"><strong>Address:<br></strong> Jazzon villa Olubodun street, gasline Ifo<br> <strong>Phone:<br></strong> +123-456-7890<br> <strong>Email:<br></strong> info@example.com</p></div> <div class="footer-div svelte-u3hftc"><h3 class="text-xl font-semibold mb-2 text-white">Quick Links</h3> <ul class="text-white"><li class="mb-1"><a href="#">Home</a></li> <li class="mb-1"><a href="#">About</a></li> <li class="mb-1"><a href="#">Portfolio</a></li> <li class="mb-1"><a href="#">Contact</a></li></ul></div></div></div> `;
});
export {
  Footer as F
};
