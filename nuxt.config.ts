// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
 
 
 
  modules: [
    'nuxt-vue3-google-signin'],
  googleSignIn: {
    clientId: '187432459411-32hs1ks0sfi8f043ek5l41qirmogevdq.apps.googleusercontent.com',
    
  },
});
