import english from "@/locales/en.json";

export type LanguageType = typeof english;
export type Locale = "en" | "es";
export type TranslationKey = NestedKeyOf<LanguageType>;

export type TranslationObject = {
  locale: Locale;
  dictionary: LanguageType;
  t: <K extends TranslationKey>(key: K) => ValueAtKey<LanguageType, K>;
};

export type NestedKeyOf<T extends Record<string, any>> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & string];

export type ValueAtKey<
  Obj extends object,
  Key extends string
> = Key extends `${infer First}.${infer Rest}`
  ? First extends keyof Obj
    ? Obj[First] extends object
      ? ValueAtKey<Obj[First], Rest>
      : never
    : never
  : Key extends keyof Obj
  ? Obj[Key]
  : never;
