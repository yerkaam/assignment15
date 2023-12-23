// Импортируем компонент
import navbar from '../components/navbar.vue';

// Экспортируем объект с метаданными
export default {
  title: 'navbar', // Заголовок для историй
  component: navbar, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { navbar },
  template: '<navbar :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { navbar },
  template: '<navbar :label="\'Another Text\'" />',
});