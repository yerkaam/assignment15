// Импортируем компонент
import tags from '../components/tags.vue';

// Экспортируем объект с метаданными
export default {
  title: 'Tags', // Заголовок для историй
  component: tags, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { tags },
  template: '<tags :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { tags },
  template: '<tags :label="\'Another Text\'" />',
});
