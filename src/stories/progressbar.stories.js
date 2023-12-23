// Импортируем компонент
import progressbar from '../components/progressbar.vue';

// Экспортируем объект с метаданными
export default {
  title: 'progressbar', // Заголовок для историй
  component: progressbar, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { progressbar },
  template: '<progressbar :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { progressbar },
  template: '<progressbar :label="\'Another Text\'" />',
});