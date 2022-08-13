import { InjectionKey, type Ref } from "vue";
import { DrawerColor } from "@/shared/types";

export const DrawerIsOpenKey = Symbol() as InjectionKey<Ref<boolean>>;

export const DrawerColorKey = Symbol() as InjectionKey<DrawerColor>;
