<script>
  import Login from './lib/views/login/login.svelte'
  import { Router, Route, navigate } from 'svelte-routing';
import Home from './lib/views/home/home.svelte';
import Recovery from './lib/views/login/recovery.svelte';
  const acces = localStorage.getItem('accessToken')

  if(acces != null) {
    navigate('/', { replace: true })
  } else {
    navigate('/login', { replace: true })
  }

</script>

<div class="main">
  <Router>
      <Route path='/' component="{Home}"/>
      <Route path='/login' component="{Login}"/>
      <Route path='/recovery' component="{Recovery}"/>
  </Router>
</div>

<style>
  .main {
    margin: 0 auto;
  }
</style>