'use client';

import React, { use } from 'react';
import useSWR from 'swr';
import { useTranslations } from 'next-intl';
import { getLists, addItemToList, removeItemFromList } from '@/utils/api';
import Image from '@/materials/basics/Image';
import Title from '@/materials/basics/Title';
import Content from '@/materials/basics/Content';
import Link from '@/materials/basics/Link';
import HGroup from '@/materials/basics/HGroup';
import DescriptionList from '@/materials/basics/DescriptionList';
import Hero from '@/materials/components/Hero';
import CardList from '@/materials/components/CardList/CardList';
import Button from '@/materials/basics/Button';

interface ItemOverviewProps {
  itemPromise: Promise<ApiProduct>;
  initialLists: ApiWishlist[];
}

const ItemOverview: React.FC<ItemOverviewProps> = ({
  itemPromise,
  initialLists,
}) => {
  const t = useTranslations('page.item');
  const item = use(itemPromise);
  const { data: lists, mutate } = useSWR<ApiWishlist[]>('wishlists', getLists, {
    fallbackData: initialLists,
  });

  const handleAddItemToList = async ({ listId }: { listId: number }) => {
    await addItemToList({ itemId: item.id, listId });
    mutate();
  };

  const handleRemoveItemFromList = async ({ listId }: { listId: number }) => {
    await removeItemFromList({ itemId: item.id, listId });
    mutate();
  };

  return (
    <>
      <Hero>
        <>
          <HGroup isReversed={true}>
            <Title size={1} element="h2" value={item.name} />
            <Content element="p" size="medium" value={item.category} />
          </HGroup>
          <Content element="p" value={t('brand', { brand: item.brand })} />
          <Link href="/" variant="button">
            Go back
          </Link>
        </>
        <>
          <Title element="h3" value={t('specifications.title')} isSrOnly />
          <DescriptionList
            items={Object.entries(item.specifications).map(([key, value]) => ({
              key: t(
                `specifications.${key as keyof typeof item.specifications}`
              ),
              value,
            }))}
          />
        </>
        <>
          <Title element="h3" value={t('visual')} isSrOnly />
          <Image src={item.image} alt="" width={250} height={250} />
        </>
      </Hero>

      {lists && (
        <>
          <Title element="h3" value={t('lists')} isSrOnly />
          <CardList>
            {lists
              .slice()
              .reverse()
              .map(list => (
                <div key={list.id}>
                  <HGroup>
                    <Title size={3} element="p" value={list.name} />
                    <Content
                      size="small"
                      element="p"
                      value={t('listItems', { amount: list.products.length })}
                    />
                  </HGroup>

                  <Button
                    disabled={list.products.includes(item.id)}
                    onClick={() =>
                      handleAddItemToList({
                        listId: list.id,
                      })
                    }>
                    {t('addToList')}
                  </Button>
                  <Button
                    disabled={!list.products.includes(item.id)}
                    onClick={() =>
                      handleRemoveItemFromList({
                        listId: list.id,
                      })
                    }>
                    {t('removeFromList')}
                  </Button>
                </div>
              ))}
          </CardList>
        </>
      )}
    </>
  );
};

export default ItemOverview;
