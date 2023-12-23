// Импортируем компонент
import tooltip from '../components/tooltip.vue';

// Экспортируем объект с метаданными
export default {
  title: 'tooltip', // Заголовок для историй
  component: tooltip, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { tooltip },
  template: '<tooltip :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { tooltip },
  template: '<tooltip :label="\'Another Text\'" />',
});