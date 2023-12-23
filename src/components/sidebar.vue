<template>
    <div class="main">
        <div class="page">
      <div class="first">
        <TextTypo text="Menu" size="14px" color="gray"></TextTypo>
        <div v-for="icon in iconbtn" :key="icon.label" style="margin-top: 10px;">
          <div class="icon" style="display: flex;">
            <Icons size="15px" :text="icon.path" class="icons" :color="icon.fontcolor"></Icons>
            <Buttons :label="icon.label" color="transparent" border="none" :fontcolor="icon.fontcolor"></Buttons>
          </div>
        </div>
      </div>
      <div class="first">
        <TextTypo text="Admin Side" size="14px" color="gray"></TextTypo>
        <div style="margin-top: 10px;">
       <div class="icon" style="display: flex;">
        <Icons size="15px" text="<i class='fa-solid fa-table-columns'></i>" class="icons" color="gray"></Icons>
        <Buttons label="Dashboard" color="transparent" border="none" fontcolor="gray"></Buttons>
       </div>
       <div class="icon" style="display: flex;">
        
        <Icons size="15px" text="<i class='fa-solid fa-bars'></i>" class="icons" color="black"></Icons>
        <Buttons label="Products" color="transparent" border="none" fontcolor="black"></Buttons>
        <Dropdown :lies="lies" ></Dropdown>
       </div>
       <div class="icon" style="display: flex;">
        <Icons size="15px" text="<i class='fa-solid fa-user'></i>" class="icons" color="gray"></Icons>
        <Buttons label="Customers" color="transparent" border="none" fontcolor="gray"></Buttons>
       </div>
    </div>
      </div>
    </div>
    <div>
        <div class="icon" style="display: flex;">
        <Icons size="15px" text="<i class='fa-solid fa-message'></i>" class="icons" color="gray"></Icons>
        <Buttons label="Help" color="transparent" border="none" fontcolor="gray"></Buttons>
       </div>
       <div class="icon" style="display: flex;">
        <Icons size="15px" text="<i class='fa-solid fa-gear'></i>" class="icons" color="gray"></Icons>
        <Buttons label="Settings" color="transparent" border="none" fontcolor="gray"></Buttons>
       </div>
       <div class="icon" style="display: flex;">
        <Icons size="15px" text="<i class='fa-solid fa-right-from-bracket'></i>" class="icons" color="gray"></Icons>
        <Buttons label="Logout" color="transparent" border="none" fontcolor="gray"></Buttons>
       </div>
    </div>
    <SwitchToggle style="margin-bottom: 30px; margin-top: 15px;"></SwitchToggle>
    <Userproful userName="Tua Manuero" work="Creator" userProfileImageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xAA5EAABAwMCBAMGBQMDBQAAAAABAAIDBAUREiEGMUFRE2FxByIygZGhFDNCUsEjsdFy4fAVFkOC8f/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIBEBAQEBAQEAAgIDAAAAAAAAAAECESEDMkExURITIv/aAAwDAQACEQMRAD8A1qIisoIiICIiAiIgIiIA35LErLlSUZ0zSgP/AGt3KxL9cXUjBDAcTPGdX7B/lRkNydbzqeeZKip4kc/EULWZhgkkdnk7DdlcbxBRkDUJWn/TlRrGxGeapjJLcn0TqeROKeeKpjEsLw9p6jp6q4oZQ3F1umD8kxuOJGdx39Qpkx7ZGNewgtcMgjqEiLHqIilAiIgIiICIiAiIgIiICIiAiLUXS8CDMVIQ+XOC7m1n+Sg0Vwn8atmkc4Y1kAnsNgsV08beTg4+RVRYc/Ec+eFQ6In4tB9QqrrLqp36QvPHfvy335K1MWsdsR9VT73NEz1U4ucclxz3Uu4QqXS0EkLyT4L8Nz2Iyof73f7KWcGeF+EqACfG1+/6dEiNRIURFZQREQEREBERAREQEREBERBh3SCpqYY4KapZSskkDZp3Akxs6kAb/Rbuy8NWp7SLVaobu2INDqy4OeWSHroY3YDp1ysDwvHLYQ8R+I4M1k4DcnGcrf19xZaqW3R0cjWQtdqkjjdpIiDGaTty2JPnhZ7/AJbfKSz1Zuns8/6sXS0FFTWiqd+mKR5gPqwsGnPdp+S567hLiCS/S2JtHqqoiPELD/SDSMh2rHL/AJhfQVinnminbO8vMMrow/q7GN/Xf7KpuI75OzP58DJMdMtJaf7tWU+l41vynUa4N9nlrsdAWV8MNfWTAeNLIzU0eTAeQXJ6LgisruK6+zQZZBQyu8aoLc+HGNx6uIxhfR/Ra1tqpIn172wCR9e8Pna47Pw0NA9MBRnf9puJ+nG+IrRw/RcMVfgUToauKQCJ8wJmcN8O1ZwQcbtxgZCxOHqB1BQkStAmkdqd5dh9FseI55r3e9H4GChtdHIRFFEQ4zuacBzj254HRV/PK6Mxz7s7yCIiszEREBERAREQEREBERAREQCAQQdx5q3LCyWJ8b+UjNBPljCufJYNZdqSkcWPdrkHNjBkomdda4Mq2Vdp8ZgOt7yZeuH4GofX7ELY3RvhOgrmjenJbIO8TsavoQ0/+q5Z7OLveq67yyWmiY6ijx+LY+cBzhjYgY+LopNxR7SqK1MMNupvx9YARIxztMcfcOPU+Q+a5riy+Oqblz6nPjMxhrg92BsCvGE6wSd8r50tV8raC6PuVNKWztmMhY1xEb2k50EZ+HGRjou7VF9ttNZY7vV1DIaSSNsjS488jIA7lU1ji+NzUcxqon09bVU7xh0M8jD8nH+MK0o7xLxPPfeIai4UhfRwOwxjGO3c1vIu6Fx6/IKmPiSYN0vgbJIP1B5aD8sLrzfHHZ6kiLT0V+imeGVTBATydqy3+2y27SHNDmkFp5EcipV49REQEREBERAREQEREBEWLdKoUtE+QHDiNLAerihEbvF0qJ3vijk0QaiMMONWD1K1OSSc9V692TgHIG2UxhoKhpGXaLlcLPWmrtkro3lrmO22c0jcFb7g2yv4orpKSOpbSugjD5NbdTiCcHSOu+M579VHs7blb32fXUW7jGhlJxHNmncfJ2MfcNVL/HVs+1Pq72U0jbc0WuomFewe6+d+WyD9pAGB5Eclya7VFykkbRXN0zDQ5hZA8/k4PIDl159l9SsOWgrmHtf4P/FQu4it0R/EQgCsjbvrZ+/HcdfJZfPfvK0+mJzscg5tDRs0KtrgMNZv3KtA8h9xyKqLtGGD43dewW7FfGx55Kv0tXPRu1QPx3b0d5YVhjQB5r1EJtTysnhZLEctc0EK4sOzs8O10w7sz9VmKygiIgIiICIiAiIgKMcTTh9c2PJ0xR8j3O5+2FJ9uvJQW4T+PU1Ep31OJHp0+wCVOWJENRx3OVl4xsrFM33clX874VVw7jcZVONJ1M91w3aR3VSdkJX0dwjdReLBRVefefENfk4bH7rcPAc0ggFpGCDyIXKvY3dyIq21SuyYnCaMd2u2d9Dv8wurAgjZcupyuvN7mOBe03g7/tq4CtoIybVVOJaANoH/ALPTt8wohCzBMjwNZ+y+o7pbqa7W+agro/Ep5m6Xt5fMea+fuMOFa/hWu8KRhnoX/kVWMax2PZy3xvs4w3mytEvHHZM6t29NlZfrDgXd1dmn0DPDhjZ+1oH2Va8Z8DT3AXqtGYiIgIiICIiAiIgxLrP+Ht80mfexpHmTsoRJ+U/HU4Ui4pqceFTt/wBZ/sP5UddvGwDq5RV8r0QxGO6O2e13TkVUNl44atlCXoKKiI52PMKtENjw7dpLHe6W4R5LY34lYP1xnZw+m48wvougqY54WOidrje0PY4fqB5FfMeF1D2TcRF0RsdQ8a4svpSTzZ1Z8ufosvrnzsbfLXv+NdY6LGuNBS3KkkpK6Bk9PKMPY8ZH+xV6F+tuR05qshYzxvZ+q+eePeE5uFbmHRudJQVBPgPPxbDdrvMfcKOhviFrBzcQB8yuw+2u7xUXDcVvDGvqauYFoP8A42t3Lv4+a5Jw+z8Tc4m/oj/qY8v/AKunFtnrl3yVM2jS0NHIDC9Tmi0YiIiAiIgIiICIiCD8RyubeKkSPdhuC0YzgaR/url0sN0sslGbpB4Laphkh95pyBjPLl8Q5qWOsVNeblRRyR/1HzxtJH6m5yQe4xlbD20gC72hg2DYZsDt7zFS33jXE/565405yvSFS0jJCqUoUPac6m81612R5qpMDOUBXKWuqLbW01bRu01EEgew9PT0P8q2rMx97CEfRnDF9gvVpp7jSHDJRiSMneN/Vp9CtneLtQ2W3yV1yqGQU8YyXOPPyA6nsF842HiW68Pulba6nw2TAGRjm6mlw2BweqsXi8XG9SGe7VktVI3GnWdm79ByCx/1et79fF3i/iCbia/1FwkLmxE6aeLP5cY5D1PM+ZWdwZTaaeeqc3d7vDYT2bz+5+y01so46q4QxPb7r3e9jbYBTimgjpYGwQN0xtGAFtI59VcREVlBERAREQEREBERBIOBKb8RxIx7hltNC+Tfo44aPsXLS+2o6uILaO1NJn5vH+Cpn7Nqb+jXVRAGqRsYPkBn+VBPbHUsfxTDE14L4qYAtHQlzlj3u3RPPmgfKbHdXMq1MMAEKpjsjzWjNUS7svMuP6cKpAc8kOA81jPOXFX3nDSsVwyMd0Hjd8nuvXH3HehXuMYTv6IluuFYtdxfKeUcZx6n/hUrWj4SjxQvl/e/+wwt4rRnRERECIiAiIgIiICIiDpXATQ3hppA3dLI4+Z1Y/hfP9dVzXO719fVv1zzTu1HoNyAB5AABEWWfyro1+EWJPy3eSx9RHJEV2Zrd3WWGhuw5YRETFE3wrHZu5/kNkREHVO/oiIlM+HWhtjpMdWk/UrZIiszoiIiBERB/9k=" ></Userproful>

</div>
  </template>
  
  <script>
  import Buttons from './buttons.vue';
import Dropdown from './dropdown.vue';
  import Icons from './icons.vue';
import Sliders from './sliders.vue';
import SwitchToggle from './switchToggle.vue';
  import TextTypo from './textTypo.vue';
import Userproful from './userproful.vue';
  
  export default {
    components: { TextTypo, Icons, Buttons, Icons, Buttons, Dropdown, Sliders, SwitchToggle, Userproful },
    props: {
      iconbtn: Array,
      icons:Array
    },
    data(){
        return{
            lies:[
        "Create new", "Products Lists"
      ]
        }
    }
  };
  </script>
  
  <style scoped>

  .main {
    padding: 20px 80px 20px 20px;
    background-color: white;
    width: 150px;
    border-radius: 10px;
  }

  .icon{
    padding: 5px;
   
  }
  .icons{
    align-items: center;
    width: 15px;
  }
  .flex{
    display: flex;
  }
  .page{
    margin-bottom: 100px;
  }
  .first{
    margin-bottom: 30px;
  }
  </style>
  