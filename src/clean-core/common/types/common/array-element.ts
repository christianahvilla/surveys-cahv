export type GetArrayElType<T> = T extends (infer ElType)[] ? ElType : T;
