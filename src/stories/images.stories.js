// Импортируем компонент
import images from '../components/images.vue';

// Экспортируем объект с метаданными
export default {
  title: 'images', // Заголовок для историй
  component: images, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { images },
  template: '<images :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { images },
  template: '<images :label="\'Another Text\'" />',
});