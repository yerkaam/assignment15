// Импортируем компонент
import siderbar from '../components/siderbar.vue';

// Экспортируем объект с метаданными
export default {
  title: 'siderbar', // Заголовок для историй
  component: siderbar, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { siderbar },
  template: '<siderbar :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { siderbar },
  template: '<siderbar :label="\'Another Text\'" />',
});