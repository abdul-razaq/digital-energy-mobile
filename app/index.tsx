import { useQuery } from '@tanstack/react-query';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  Text,
  View,
} from 'react-native';

import { getProducts } from '~/services';
import type { Product as ProductType } from '~/types/product';

const imageLinks = {
  apple:
    'https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  google:
    'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  samsung:
    'https://images.pexels.com/photos/214487/pexels-photo-214487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  beats:
    'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

export default function Home() {
  const { isPending, data, status, refetch, isRefetching } = useQuery<ProductType[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isPending) {
    return (
      <View className="flex-1 items-center justify-center bg-red-100">
        <ActivityIndicator size="large" color="#e11d48" />
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View className="flex-1 items-center justify-center bg-red-100">
        <Text className="text-center font-SatoshiBold text-2xl text-rose-700">
          An error has occurred!
        </Text>

        <Pressable onPress={() => refetch()} className="my-4 rounded-full bg-rose-500 px-8 py-4">
          <Text className="font-SatoshiMedium text-lg uppercase leading-normal tracking-wide text-white">
            Refresh
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerClassName="bg-red-100 p-6 py-10"
      showsVerticalScrollIndicator={false}
      data={data}
      ListHeaderComponent={() => (
        <Text className="text-center font-SatoshiBold text-3xl font-medium uppercase leading-normal tracking-wider text-rose-600">
          Digital Energy
        </Text>
      )}
      renderItem={({ item }) => <Product data={item} />}
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
    />
  );
}

function Product({ data }: { data: ProductType }) {
  return (
    <View
      className=" my-10 w-full overflow-hidden rounded-lg bg-rose-50 shadow-sm shadow-black/50"
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      }}>
      <Image
        source={{
          uri: data.name.toLowerCase().includes('apple')
            ? imageLinks.apple
            : data.name.toLowerCase().includes('samsung')
              ? imageLinks.samsung
              : data.name.toLowerCase().includes('google')
                ? imageLinks.google
                : imageLinks.beats,
        }}
        className="h-56 w-full"
        resizeMode="cover"
        resizeMethod="auto"
      />

      <View className=" p-4">
        <Text className="font-SatoshiBold text-lg leading-normal tracking-wide">{data?.name}</Text>

        <View className="mt-4 gap-3">
          {data.data &&
            Object.keys(data.data).map((entry, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <View className="flex-row items-baseline" key={index}>
                <Text className="font-SatoshiBold text-lg uppercase leading-normal tracking-wide text-rose-600">
                  {entry}:{' '}
                </Text>
                <Text className="w-7/12 font-SatoshiMedium text-lg" numberOfLines={2}>
                  {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                  {(data as any).data?.[entry]}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
}
