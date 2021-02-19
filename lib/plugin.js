import {<%= options.imports.join(', ') %>} from "gsap"
const activated = [
  <%= options.imports.join(', ') %>
]
<% if (options.plugins) { %>
<% options.plugins.map(p => { %>
 import { <%= p %> } from "gsap/<%= p %>.js"
<% }); %>
<% } %>

export default async  (context, inject) => {
  <% options.imports.map(i => { %>
    gsap['<%= i %>'] = <%= i%>
  <% }) %>
  <% options.plugins.map(i => { %>
    gsap['<%= i %>'] = <%= i%>
  <% }) %>
  if (process.client) {
    gsap.registerPlugin(<%= options.plugins %>)
  }
  inject('gsap', gsap)
}
