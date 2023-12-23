// Импортируем компонент
import loading from '../components/loading.vue';

// Экспортируем объект с метаданными
export default {
  title: 'loading', // Заголовок для историй
  component: loading, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { loading },
  template: '<loading :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { loading },
  template: '<loading :label="\'Another Text\'" />',
});