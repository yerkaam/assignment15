// Импортируем компонент
import phoneInput from '../components/phoneInput.vue';

// Экспортируем объект с метаданными
export default {
  title: 'phoneInput', // Заголовок для историй
  component: phoneInput, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { phoneInput },
  template: '<phoneInput :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { phoneInput },
  template: '<phoneInput :label="\'Another Text\'" />',
});