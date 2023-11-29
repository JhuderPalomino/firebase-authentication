<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input v-model="email" type="email" required>
      <label>Contraseña:</label>
      <input v-model="password" type="password" required>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const auth = getAuth();
        const response = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log('Usuario autenticado', JSON.parse(JSON.stringify(response)));
        // Puedes redirigir a otra página después del inicio de sesión exitoso.
      } catch (error) {
        console.error('Error de inicio de sesión:', error.message);
      }
    },
  },
};
</script>