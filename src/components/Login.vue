<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label>Email:</label>
      <input v-model="email" type="email" required class="input-field">
      <label>Contraseña:</label>
      <input v-model="password" type="password" required class="input-field">
      <button type="submit" class="login-button">Iniciar sesión</button>
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
<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 10px;
  padding: 8px;
}

.login-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #45a049;
}
</style>