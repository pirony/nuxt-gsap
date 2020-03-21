import {<%= options.imports %>} from "gsap"
const activated = [
    gsap, <%= options.imports %>
]
export default async  (context, inject) => {
  const OptionsObject = {
    <%= options.imports %>
  }
  Object.keys(OptionsObject).forEach(key => gsap[key] = OptionsObject[key] )
  inject('gsap', gsap)
}
