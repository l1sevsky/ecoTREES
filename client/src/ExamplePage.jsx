import React from 'react';

import Main from './components/general/Main';
import Menu from './components/general/Menu';
import Header from './components/general/Header';
import Navbar from './components/general/Navbar';
import SubHeader from './components/general/SubHeader';
import CategoryTitle from './components/categories/CategoryTitle';
import CategoryTitleRow from './components/categories/CategoryTitleRow';
import Category from './components/categories/Category';
import CategoryBody from './components/categories/CategoryBody';
import CategoryOverflowBody from './components/categories/CategoryOverflowBody';
import BigButton from './components/buttons/BigButton';
import BaseButton from './components/buttons/BaseButton';
import CategoryTitleButton from './components/buttons/CategoryTitleButton';
import CategoryTitleButtons from './components/categories/CategoryTitleButtons';
import LumberProductCard from './components/products/LumberProductCard';
import RadioCategory from './components/forms/RadioCategory';
import RadioBase from './components/forms/RadioBase';
import CheckboxBase from './components/forms/CheckboxBase';
import NumberInput from './components/forms/NumberInput';
import TextBlock from './components/categories/TextBlock';
import CategoryNote from './components/categories/CategoryNote';
import LumberPricelistCard from './components/products/LumberPricelistCard';


function ExamplePage () {
  const cardDataObj = {
    productName: 'Евровагонка',
    woodlist: 'Липа, осина, берёза, дуб',
    wholesalePrice: 6000,
    retailPrice: 8000,
    bgImg: { backgroundImage: `url(${process.env.PUBLIC_URL + '/photos/' + 'photo_2022-02-11_15-40-44.jpg'})`}
  };

  return (
    <>
      <Header />
      <Menu>
        <Navbar />
      </Menu>
      <Main>
        <SubHeader />

        <Category>
          <CategoryTitleRow>
            <CategoryTitle title='Разделы'>
              <CategoryTitleButton icon='back' />
            </CategoryTitle>
            <CategoryTitleButtons>
              <CategoryTitleButton icon='settings' />
            </CategoryTitleButtons>
          </CategoryTitleRow>
          <CategoryOverflowBody>
            <BigButton title='Каталог товаров' icon='catalog' />
            <BigButton title='Статьи' icon='article' />
            <BigButton title='Контакты' icon='contacts' />
            <BigButton title='Каталог товаров' icon='catalog' />
            <BigButton title='Статьи' icon='article' />
            <BigButton title='Контакты' icon='contacts' />
            <BigButton title='Каталог товаров' icon='catalog' />
            <BigButton title='Статьи' icon='article' />
            <BigButton title='Контакты' icon='contacts' />
          </CategoryOverflowBody>
        </Category>

        <Category>
          <CategoryTitleRow>
            <CategoryTitle title='Кнопки'>
              <CategoryTitleButton icon='back' />
            </CategoryTitle>
            <CategoryTitleButtons>
              <CategoryTitleButton icon='settings' />
            </CategoryTitleButtons>
          </CategoryTitleRow>
          <CategoryOverflowBody>
            <BaseButton title='Заказать' color='green' icon='basket' />
            <BaseButton title='Перейти в каталог' color='orange' icon='catalog' />
            <BaseButton title='Подробнее о вашем аккаунте' color='black' icon='user' />
            <BaseButton title='Заказать' color='green' icon='basket' />
            <BaseButton title='Перейти в каталог' color='orange' icon='catalog' />
            <BaseButton title='Подробнее о вашем аккаунте' color='black' icon='user' />
          </CategoryOverflowBody>
        </Category>

        <Category>
          <CategoryTitleRow>
            <CategoryTitle title='Товары' type='subtitle' />
          </CategoryTitleRow>
          <CategoryBody>
            <LumberProductCard { ...cardDataObj } />
            <LumberProductCard { ...cardDataObj } />
            <LumberProductCard { ...cardDataObj } />
            <LumberProductCard { ...cardDataObj } />    
          </CategoryBody>
        </Category>

        <Category>
          <CategoryTitleRow>
            <CategoryTitle title='Элементы управления' />
          </CategoryTitleRow>
          <CategoryBody>
            <RadioCategory title='погонаж' name='category' value='lumber' />
            <RadioCategory title='двери' name='category' value='doors' active={true} />
          </CategoryBody>
          <CategoryBody>
            <RadioBase title='Сосна' name='wood' value='1'/>
            <RadioBase title='Осина' name='wood' value='2' active={true} />
            <RadioBase title='берёза' name='wood' value='3'/>
            <RadioBase title='дуб' name='wood' value='3'/>
          </CategoryBody>
          <CategoryBody>
            <CheckboxBase title='Сорт А' name='variety' value='A' />
            <CheckboxBase title='Сорт B' name='variety' value='B'  active={true} />
            <CheckboxBase title='Сорт C' name='variety' value='C'  active={true} />
          </CategoryBody>
          <CategoryBody>
            <NumberInput />
          </CategoryBody>
          <CategoryBody>
            <TextBlock>
              Одним из наипопулярнейших натуральных облицовочных материалов является вагонка. Представляем вам каталог товаров, изготовленных на современном оборудовании и по инновационным технологиям. Гарантируем отменное качество вагонки, демократичные цены, долговечность. 
             </TextBlock>
          </CategoryBody>
          <CategoryBody>
            <CategoryNote>
              оптовая цена применяется при заказе от 300 метров
            </CategoryNote>
          </CategoryBody>
          <CategoryBody>
            <LumberPricelistCard />
          </CategoryBody>
        </Category>
      </Main> 
    </> 
  );
}


export default ExamplePage;
