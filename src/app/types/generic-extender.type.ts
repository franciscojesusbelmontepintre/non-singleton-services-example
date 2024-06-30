export type GenericExtenderType<T> = T & {
  builder: () => T
}
