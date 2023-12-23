// Импортируем компонент
import PasswordInput from '../components/PasswordInput.vue';

// Экспортируем объект с метаданными
export default {
  title: 'PasswordInput', // Заголовок для историй
  component: PasswordInput, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { PasswordInput },
  template: '<PasswordInput :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { PasswordInput },
  template: '<PasswordInput :label="\'Another Text\'" />',
});