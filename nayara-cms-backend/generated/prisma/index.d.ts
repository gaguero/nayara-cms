
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model ContentItem
 * 
 */
export type ContentItem = $Result.DefaultSelection<Prisma.$ContentItemPayload>
/**
 * Model PlanningDocument
 * 
 */
export type PlanningDocument = $Result.DefaultSelection<Prisma.$PlanningDocumentPayload>
/**
 * Model MediaAsset
 * 
 */
export type MediaAsset = $Result.DefaultSelection<Prisma.$MediaAssetPayload>
/**
 * Model MediaRequirement
 * 
 */
export type MediaRequirement = $Result.DefaultSelection<Prisma.$MediaRequirementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentItem`: Exposes CRUD operations for the **ContentItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentItems
    * const contentItems = await prisma.contentItem.findMany()
    * ```
    */
  get contentItem(): Prisma.ContentItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planningDocument`: Exposes CRUD operations for the **PlanningDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanningDocuments
    * const planningDocuments = await prisma.planningDocument.findMany()
    * ```
    */
  get planningDocument(): Prisma.PlanningDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaAsset`: Exposes CRUD operations for the **MediaAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaAssets
    * const mediaAssets = await prisma.mediaAsset.findMany()
    * ```
    */
  get mediaAsset(): Prisma.MediaAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaRequirement`: Exposes CRUD operations for the **MediaRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaRequirements
    * const mediaRequirements = await prisma.mediaRequirement.findMany()
    * ```
    */
  get mediaRequirement(): Prisma.MediaRequirementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Campaign: 'Campaign',
    ContentItem: 'ContentItem',
    PlanningDocument: 'PlanningDocument',
    MediaAsset: 'MediaAsset',
    MediaRequirement: 'MediaRequirement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "campaign" | "contentItem" | "planningDocument" | "mediaAsset" | "mediaRequirement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      ContentItem: {
        payload: Prisma.$ContentItemPayload<ExtArgs>
        fields: Prisma.ContentItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          findFirst: {
            args: Prisma.ContentItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          findMany: {
            args: Prisma.ContentItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>[]
          }
          create: {
            args: Prisma.ContentItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          createMany: {
            args: Prisma.ContentItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>[]
          }
          delete: {
            args: Prisma.ContentItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          update: {
            args: Prisma.ContentItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          deleteMany: {
            args: Prisma.ContentItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>[]
          }
          upsert: {
            args: Prisma.ContentItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          aggregate: {
            args: Prisma.ContentItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentItem>
          }
          groupBy: {
            args: Prisma.ContentItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentItemCountArgs<ExtArgs>
            result: $Utils.Optional<ContentItemCountAggregateOutputType> | number
          }
        }
      }
      PlanningDocument: {
        payload: Prisma.$PlanningDocumentPayload<ExtArgs>
        fields: Prisma.PlanningDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanningDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanningDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>
          }
          findFirst: {
            args: Prisma.PlanningDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanningDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>
          }
          findMany: {
            args: Prisma.PlanningDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>[]
          }
          create: {
            args: Prisma.PlanningDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>
          }
          createMany: {
            args: Prisma.PlanningDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanningDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>[]
          }
          delete: {
            args: Prisma.PlanningDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>
          }
          update: {
            args: Prisma.PlanningDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>
          }
          deleteMany: {
            args: Prisma.PlanningDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanningDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanningDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>[]
          }
          upsert: {
            args: Prisma.PlanningDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningDocumentPayload>
          }
          aggregate: {
            args: Prisma.PlanningDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanningDocument>
          }
          groupBy: {
            args: Prisma.PlanningDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanningDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanningDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<PlanningDocumentCountAggregateOutputType> | number
          }
        }
      }
      MediaAsset: {
        payload: Prisma.$MediaAssetPayload<ExtArgs>
        fields: Prisma.MediaAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          findFirst: {
            args: Prisma.MediaAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          findMany: {
            args: Prisma.MediaAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          create: {
            args: Prisma.MediaAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          createMany: {
            args: Prisma.MediaAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          delete: {
            args: Prisma.MediaAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          update: {
            args: Prisma.MediaAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          deleteMany: {
            args: Prisma.MediaAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          upsert: {
            args: Prisma.MediaAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          aggregate: {
            args: Prisma.MediaAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaAsset>
          }
          groupBy: {
            args: Prisma.MediaAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaAssetCountArgs<ExtArgs>
            result: $Utils.Optional<MediaAssetCountAggregateOutputType> | number
          }
        }
      }
      MediaRequirement: {
        payload: Prisma.$MediaRequirementPayload<ExtArgs>
        fields: Prisma.MediaRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>
          }
          findFirst: {
            args: Prisma.MediaRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>
          }
          findMany: {
            args: Prisma.MediaRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>[]
          }
          create: {
            args: Prisma.MediaRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>
          }
          createMany: {
            args: Prisma.MediaRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>[]
          }
          delete: {
            args: Prisma.MediaRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>
          }
          update: {
            args: Prisma.MediaRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>
          }
          deleteMany: {
            args: Prisma.MediaRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>[]
          }
          upsert: {
            args: Prisma.MediaRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaRequirementPayload>
          }
          aggregate: {
            args: Prisma.MediaRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaRequirement>
          }
          groupBy: {
            args: Prisma.MediaRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<MediaRequirementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    campaign?: CampaignOmit
    contentItem?: ContentItemOmit
    planningDocument?: PlanningDocumentOmit
    mediaAsset?: MediaAssetOmit
    mediaRequirement?: MediaRequirementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    campaigns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    contentItems: number
    planningDocuments: number
    mediaAssets: number
    mediaRequirements: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentItems?: boolean | CampaignCountOutputTypeCountContentItemsArgs
    planningDocuments?: boolean | CampaignCountOutputTypeCountPlanningDocumentsArgs
    mediaAssets?: boolean | CampaignCountOutputTypeCountMediaAssetsArgs
    mediaRequirements?: boolean | CampaignCountOutputTypeCountMediaRequirementsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountContentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentItemWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountPlanningDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanningDocumentWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountMediaAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAssetWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountMediaRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaRequirementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    description: string | null
    startDate: Date
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    contentItems?: boolean | Campaign$contentItemsArgs<ExtArgs>
    planningDocuments?: boolean | Campaign$planningDocumentsArgs<ExtArgs>
    mediaAssets?: boolean | Campaign$mediaAssetsArgs<ExtArgs>
    mediaRequirements?: boolean | Campaign$mediaRequirementsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "isActive" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    contentItems?: boolean | Campaign$contentItemsArgs<ExtArgs>
    planningDocuments?: boolean | Campaign$planningDocumentsArgs<ExtArgs>
    mediaAssets?: boolean | Campaign$mediaAssetsArgs<ExtArgs>
    mediaRequirements?: boolean | Campaign$mediaRequirementsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      contentItems: Prisma.$ContentItemPayload<ExtArgs>[]
      planningDocuments: Prisma.$PlanningDocumentPayload<ExtArgs>[]
      mediaAssets: Prisma.$MediaAssetPayload<ExtArgs>[]
      mediaRequirements: Prisma.$MediaRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      startDate: Date
      endDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentItems<T extends Campaign$contentItemsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$contentItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planningDocuments<T extends Campaign$planningDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$planningDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaAssets<T extends Campaign$mediaAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$mediaAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaRequirements<T extends Campaign$mediaRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$mediaRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly isActive: FieldRef<"Campaign", 'Boolean'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly createdById: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.contentItems
   */
  export type Campaign$contentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    where?: ContentItemWhereInput
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    cursor?: ContentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * Campaign.planningDocuments
   */
  export type Campaign$planningDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    where?: PlanningDocumentWhereInput
    orderBy?: PlanningDocumentOrderByWithRelationInput | PlanningDocumentOrderByWithRelationInput[]
    cursor?: PlanningDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanningDocumentScalarFieldEnum | PlanningDocumentScalarFieldEnum[]
  }

  /**
   * Campaign.mediaAssets
   */
  export type Campaign$mediaAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    where?: MediaAssetWhereInput
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    cursor?: MediaAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * Campaign.mediaRequirements
   */
  export type Campaign$mediaRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    where?: MediaRequirementWhereInput
    orderBy?: MediaRequirementOrderByWithRelationInput | MediaRequirementOrderByWithRelationInput[]
    cursor?: MediaRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaRequirementScalarFieldEnum | MediaRequirementScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model ContentItem
   */

  export type AggregateContentItem = {
    _count: ContentItemCountAggregateOutputType | null
    _min: ContentItemMinAggregateOutputType | null
    _max: ContentItemMaxAggregateOutputType | null
  }

  export type ContentItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    contentType: string | null
    mediaUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
  }

  export type ContentItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    contentType: string | null
    mediaUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
  }

  export type ContentItemCountAggregateOutputType = {
    id: number
    title: number
    body: number
    contentType: number
    mediaUrl: number
    status: number
    createdAt: number
    updatedAt: number
    campaignId: number
    _all: number
  }


  export type ContentItemMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    contentType?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
  }

  export type ContentItemMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    contentType?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
  }

  export type ContentItemCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    contentType?: true
    mediaUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    _all?: true
  }

  export type ContentItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentItem to aggregate.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentItems
    **/
    _count?: true | ContentItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentItemMaxAggregateInputType
  }

  export type GetContentItemAggregateType<T extends ContentItemAggregateArgs> = {
        [P in keyof T & keyof AggregateContentItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentItem[P]>
      : GetScalarType<T[P], AggregateContentItem[P]>
  }




  export type ContentItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentItemWhereInput
    orderBy?: ContentItemOrderByWithAggregationInput | ContentItemOrderByWithAggregationInput[]
    by: ContentItemScalarFieldEnum[] | ContentItemScalarFieldEnum
    having?: ContentItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentItemCountAggregateInputType | true
    _min?: ContentItemMinAggregateInputType
    _max?: ContentItemMaxAggregateInputType
  }

  export type ContentItemGroupByOutputType = {
    id: string
    title: string
    body: string
    contentType: string
    mediaUrl: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    campaignId: string
    _count: ContentItemCountAggregateOutputType | null
    _min: ContentItemMinAggregateOutputType | null
    _max: ContentItemMaxAggregateOutputType | null
  }

  type GetContentItemGroupByPayload<T extends ContentItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentItemGroupByOutputType[P]>
            : GetScalarType<T[P], ContentItemGroupByOutputType[P]>
        }
      >
    >


  export type ContentItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    contentType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentItem"]>

  export type ContentItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    contentType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentItem"]>

  export type ContentItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    contentType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentItem"]>

  export type ContentItemSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    contentType?: boolean
    mediaUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
  }

  export type ContentItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "contentType" | "mediaUrl" | "status" | "createdAt" | "updatedAt" | "campaignId", ExtArgs["result"]["contentItem"]>
  export type ContentItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type ContentItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type ContentItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $ContentItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentItem"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: string
      contentType: string
      mediaUrl: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      campaignId: string
    }, ExtArgs["result"]["contentItem"]>
    composites: {}
  }

  type ContentItemGetPayload<S extends boolean | null | undefined | ContentItemDefaultArgs> = $Result.GetResult<Prisma.$ContentItemPayload, S>

  type ContentItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentItemCountAggregateInputType | true
    }

  export interface ContentItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentItem'], meta: { name: 'ContentItem' } }
    /**
     * Find zero or one ContentItem that matches the filter.
     * @param {ContentItemFindUniqueArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentItemFindUniqueArgs>(args: SelectSubset<T, ContentItemFindUniqueArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentItemFindUniqueOrThrowArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemFindFirstArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentItemFindFirstArgs>(args?: SelectSubset<T, ContentItemFindFirstArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemFindFirstOrThrowArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentItems
     * const contentItems = await prisma.contentItem.findMany()
     * 
     * // Get first 10 ContentItems
     * const contentItems = await prisma.contentItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentItemWithIdOnly = await prisma.contentItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentItemFindManyArgs>(args?: SelectSubset<T, ContentItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentItem.
     * @param {ContentItemCreateArgs} args - Arguments to create a ContentItem.
     * @example
     * // Create one ContentItem
     * const ContentItem = await prisma.contentItem.create({
     *   data: {
     *     // ... data to create a ContentItem
     *   }
     * })
     * 
     */
    create<T extends ContentItemCreateArgs>(args: SelectSubset<T, ContentItemCreateArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentItems.
     * @param {ContentItemCreateManyArgs} args - Arguments to create many ContentItems.
     * @example
     * // Create many ContentItems
     * const contentItem = await prisma.contentItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentItemCreateManyArgs>(args?: SelectSubset<T, ContentItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentItems and returns the data saved in the database.
     * @param {ContentItemCreateManyAndReturnArgs} args - Arguments to create many ContentItems.
     * @example
     * // Create many ContentItems
     * const contentItem = await prisma.contentItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentItems and only return the `id`
     * const contentItemWithIdOnly = await prisma.contentItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentItem.
     * @param {ContentItemDeleteArgs} args - Arguments to delete one ContentItem.
     * @example
     * // Delete one ContentItem
     * const ContentItem = await prisma.contentItem.delete({
     *   where: {
     *     // ... filter to delete one ContentItem
     *   }
     * })
     * 
     */
    delete<T extends ContentItemDeleteArgs>(args: SelectSubset<T, ContentItemDeleteArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentItem.
     * @param {ContentItemUpdateArgs} args - Arguments to update one ContentItem.
     * @example
     * // Update one ContentItem
     * const contentItem = await prisma.contentItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentItemUpdateArgs>(args: SelectSubset<T, ContentItemUpdateArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentItems.
     * @param {ContentItemDeleteManyArgs} args - Arguments to filter ContentItems to delete.
     * @example
     * // Delete a few ContentItems
     * const { count } = await prisma.contentItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentItemDeleteManyArgs>(args?: SelectSubset<T, ContentItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentItems
     * const contentItem = await prisma.contentItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentItemUpdateManyArgs>(args: SelectSubset<T, ContentItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentItems and returns the data updated in the database.
     * @param {ContentItemUpdateManyAndReturnArgs} args - Arguments to update many ContentItems.
     * @example
     * // Update many ContentItems
     * const contentItem = await prisma.contentItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentItems and only return the `id`
     * const contentItemWithIdOnly = await prisma.contentItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentItem.
     * @param {ContentItemUpsertArgs} args - Arguments to update or create a ContentItem.
     * @example
     * // Update or create a ContentItem
     * const contentItem = await prisma.contentItem.upsert({
     *   create: {
     *     // ... data to create a ContentItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentItem we want to update
     *   }
     * })
     */
    upsert<T extends ContentItemUpsertArgs>(args: SelectSubset<T, ContentItemUpsertArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemCountArgs} args - Arguments to filter ContentItems to count.
     * @example
     * // Count the number of ContentItems
     * const count = await prisma.contentItem.count({
     *   where: {
     *     // ... the filter for the ContentItems we want to count
     *   }
     * })
    **/
    count<T extends ContentItemCountArgs>(
      args?: Subset<T, ContentItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentItemAggregateArgs>(args: Subset<T, ContentItemAggregateArgs>): Prisma.PrismaPromise<GetContentItemAggregateType<T>>

    /**
     * Group by ContentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentItemGroupByArgs['orderBy'] }
        : { orderBy?: ContentItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentItem model
   */
  readonly fields: ContentItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentItem model
   */
  interface ContentItemFieldRefs {
    readonly id: FieldRef<"ContentItem", 'String'>
    readonly title: FieldRef<"ContentItem", 'String'>
    readonly body: FieldRef<"ContentItem", 'String'>
    readonly contentType: FieldRef<"ContentItem", 'String'>
    readonly mediaUrl: FieldRef<"ContentItem", 'String'>
    readonly status: FieldRef<"ContentItem", 'String'>
    readonly createdAt: FieldRef<"ContentItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentItem", 'DateTime'>
    readonly campaignId: FieldRef<"ContentItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContentItem findUnique
   */
  export type ContentItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem findUniqueOrThrow
   */
  export type ContentItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem findFirst
   */
  export type ContentItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentItems.
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentItems.
     */
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * ContentItem findFirstOrThrow
   */
  export type ContentItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentItems.
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentItems.
     */
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * ContentItem findMany
   */
  export type ContentItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItems to fetch.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentItems.
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * ContentItem create
   */
  export type ContentItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentItem.
     */
    data: XOR<ContentItemCreateInput, ContentItemUncheckedCreateInput>
  }

  /**
   * ContentItem createMany
   */
  export type ContentItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentItems.
     */
    data: ContentItemCreateManyInput | ContentItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentItem createManyAndReturn
   */
  export type ContentItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * The data used to create many ContentItems.
     */
    data: ContentItemCreateManyInput | ContentItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentItem update
   */
  export type ContentItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentItem.
     */
    data: XOR<ContentItemUpdateInput, ContentItemUncheckedUpdateInput>
    /**
     * Choose, which ContentItem to update.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem updateMany
   */
  export type ContentItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentItems.
     */
    data: XOR<ContentItemUpdateManyMutationInput, ContentItemUncheckedUpdateManyInput>
    /**
     * Filter which ContentItems to update
     */
    where?: ContentItemWhereInput
    /**
     * Limit how many ContentItems to update.
     */
    limit?: number
  }

  /**
   * ContentItem updateManyAndReturn
   */
  export type ContentItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * The data used to update ContentItems.
     */
    data: XOR<ContentItemUpdateManyMutationInput, ContentItemUncheckedUpdateManyInput>
    /**
     * Filter which ContentItems to update
     */
    where?: ContentItemWhereInput
    /**
     * Limit how many ContentItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentItem upsert
   */
  export type ContentItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentItem to update in case it exists.
     */
    where: ContentItemWhereUniqueInput
    /**
     * In case the ContentItem found by the `where` argument doesn't exist, create a new ContentItem with this data.
     */
    create: XOR<ContentItemCreateInput, ContentItemUncheckedCreateInput>
    /**
     * In case the ContentItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentItemUpdateInput, ContentItemUncheckedUpdateInput>
  }

  /**
   * ContentItem delete
   */
  export type ContentItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter which ContentItem to delete.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem deleteMany
   */
  export type ContentItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentItems to delete
     */
    where?: ContentItemWhereInput
    /**
     * Limit how many ContentItems to delete.
     */
    limit?: number
  }

  /**
   * ContentItem without action
   */
  export type ContentItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
  }


  /**
   * Model PlanningDocument
   */

  export type AggregatePlanningDocument = {
    _count: PlanningDocumentCountAggregateOutputType | null
    _avg: PlanningDocumentAvgAggregateOutputType | null
    _sum: PlanningDocumentSumAggregateOutputType | null
    _min: PlanningDocumentMinAggregateOutputType | null
    _max: PlanningDocumentMaxAggregateOutputType | null
  }

  export type PlanningDocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type PlanningDocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type PlanningDocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fileUrl: string | null
    fileSize: number | null
    fileType: string | null
    uploadedAt: Date | null
    campaignId: string | null
  }

  export type PlanningDocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fileUrl: string | null
    fileSize: number | null
    fileType: string | null
    uploadedAt: Date | null
    campaignId: string | null
  }

  export type PlanningDocumentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    fileUrl: number
    fileSize: number
    fileType: number
    uploadedAt: number
    campaignId: number
    _all: number
  }


  export type PlanningDocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type PlanningDocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type PlanningDocumentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileUrl?: true
    fileSize?: true
    fileType?: true
    uploadedAt?: true
    campaignId?: true
  }

  export type PlanningDocumentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileUrl?: true
    fileSize?: true
    fileType?: true
    uploadedAt?: true
    campaignId?: true
  }

  export type PlanningDocumentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileUrl?: true
    fileSize?: true
    fileType?: true
    uploadedAt?: true
    campaignId?: true
    _all?: true
  }

  export type PlanningDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanningDocument to aggregate.
     */
    where?: PlanningDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningDocuments to fetch.
     */
    orderBy?: PlanningDocumentOrderByWithRelationInput | PlanningDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanningDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanningDocuments
    **/
    _count?: true | PlanningDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanningDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanningDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanningDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanningDocumentMaxAggregateInputType
  }

  export type GetPlanningDocumentAggregateType<T extends PlanningDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanningDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanningDocument[P]>
      : GetScalarType<T[P], AggregatePlanningDocument[P]>
  }




  export type PlanningDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanningDocumentWhereInput
    orderBy?: PlanningDocumentOrderByWithAggregationInput | PlanningDocumentOrderByWithAggregationInput[]
    by: PlanningDocumentScalarFieldEnum[] | PlanningDocumentScalarFieldEnum
    having?: PlanningDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanningDocumentCountAggregateInputType | true
    _avg?: PlanningDocumentAvgAggregateInputType
    _sum?: PlanningDocumentSumAggregateInputType
    _min?: PlanningDocumentMinAggregateInputType
    _max?: PlanningDocumentMaxAggregateInputType
  }

  export type PlanningDocumentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt: Date
    campaignId: string
    _count: PlanningDocumentCountAggregateOutputType | null
    _avg: PlanningDocumentAvgAggregateOutputType | null
    _sum: PlanningDocumentSumAggregateOutputType | null
    _min: PlanningDocumentMinAggregateOutputType | null
    _max: PlanningDocumentMaxAggregateOutputType | null
  }

  type GetPlanningDocumentGroupByPayload<T extends PlanningDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanningDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanningDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanningDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], PlanningDocumentGroupByOutputType[P]>
        }
      >
    >


  export type PlanningDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningDocument"]>

  export type PlanningDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningDocument"]>

  export type PlanningDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningDocument"]>

  export type PlanningDocumentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    campaignId?: boolean
  }

  export type PlanningDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "fileUrl" | "fileSize" | "fileType" | "uploadedAt" | "campaignId", ExtArgs["result"]["planningDocument"]>
  export type PlanningDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type PlanningDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type PlanningDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $PlanningDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanningDocument"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      fileUrl: string
      fileSize: number
      fileType: string
      uploadedAt: Date
      campaignId: string
    }, ExtArgs["result"]["planningDocument"]>
    composites: {}
  }

  type PlanningDocumentGetPayload<S extends boolean | null | undefined | PlanningDocumentDefaultArgs> = $Result.GetResult<Prisma.$PlanningDocumentPayload, S>

  type PlanningDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanningDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanningDocumentCountAggregateInputType | true
    }

  export interface PlanningDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanningDocument'], meta: { name: 'PlanningDocument' } }
    /**
     * Find zero or one PlanningDocument that matches the filter.
     * @param {PlanningDocumentFindUniqueArgs} args - Arguments to find a PlanningDocument
     * @example
     * // Get one PlanningDocument
     * const planningDocument = await prisma.planningDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanningDocumentFindUniqueArgs>(args: SelectSubset<T, PlanningDocumentFindUniqueArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanningDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanningDocumentFindUniqueOrThrowArgs} args - Arguments to find a PlanningDocument
     * @example
     * // Get one PlanningDocument
     * const planningDocument = await prisma.planningDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanningDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanningDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanningDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentFindFirstArgs} args - Arguments to find a PlanningDocument
     * @example
     * // Get one PlanningDocument
     * const planningDocument = await prisma.planningDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanningDocumentFindFirstArgs>(args?: SelectSubset<T, PlanningDocumentFindFirstArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanningDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentFindFirstOrThrowArgs} args - Arguments to find a PlanningDocument
     * @example
     * // Get one PlanningDocument
     * const planningDocument = await prisma.planningDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanningDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanningDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanningDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanningDocuments
     * const planningDocuments = await prisma.planningDocument.findMany()
     * 
     * // Get first 10 PlanningDocuments
     * const planningDocuments = await prisma.planningDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planningDocumentWithIdOnly = await prisma.planningDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanningDocumentFindManyArgs>(args?: SelectSubset<T, PlanningDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanningDocument.
     * @param {PlanningDocumentCreateArgs} args - Arguments to create a PlanningDocument.
     * @example
     * // Create one PlanningDocument
     * const PlanningDocument = await prisma.planningDocument.create({
     *   data: {
     *     // ... data to create a PlanningDocument
     *   }
     * })
     * 
     */
    create<T extends PlanningDocumentCreateArgs>(args: SelectSubset<T, PlanningDocumentCreateArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanningDocuments.
     * @param {PlanningDocumentCreateManyArgs} args - Arguments to create many PlanningDocuments.
     * @example
     * // Create many PlanningDocuments
     * const planningDocument = await prisma.planningDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanningDocumentCreateManyArgs>(args?: SelectSubset<T, PlanningDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanningDocuments and returns the data saved in the database.
     * @param {PlanningDocumentCreateManyAndReturnArgs} args - Arguments to create many PlanningDocuments.
     * @example
     * // Create many PlanningDocuments
     * const planningDocument = await prisma.planningDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanningDocuments and only return the `id`
     * const planningDocumentWithIdOnly = await prisma.planningDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanningDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanningDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanningDocument.
     * @param {PlanningDocumentDeleteArgs} args - Arguments to delete one PlanningDocument.
     * @example
     * // Delete one PlanningDocument
     * const PlanningDocument = await prisma.planningDocument.delete({
     *   where: {
     *     // ... filter to delete one PlanningDocument
     *   }
     * })
     * 
     */
    delete<T extends PlanningDocumentDeleteArgs>(args: SelectSubset<T, PlanningDocumentDeleteArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanningDocument.
     * @param {PlanningDocumentUpdateArgs} args - Arguments to update one PlanningDocument.
     * @example
     * // Update one PlanningDocument
     * const planningDocument = await prisma.planningDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanningDocumentUpdateArgs>(args: SelectSubset<T, PlanningDocumentUpdateArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanningDocuments.
     * @param {PlanningDocumentDeleteManyArgs} args - Arguments to filter PlanningDocuments to delete.
     * @example
     * // Delete a few PlanningDocuments
     * const { count } = await prisma.planningDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanningDocumentDeleteManyArgs>(args?: SelectSubset<T, PlanningDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanningDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanningDocuments
     * const planningDocument = await prisma.planningDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanningDocumentUpdateManyArgs>(args: SelectSubset<T, PlanningDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanningDocuments and returns the data updated in the database.
     * @param {PlanningDocumentUpdateManyAndReturnArgs} args - Arguments to update many PlanningDocuments.
     * @example
     * // Update many PlanningDocuments
     * const planningDocument = await prisma.planningDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanningDocuments and only return the `id`
     * const planningDocumentWithIdOnly = await prisma.planningDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanningDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanningDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanningDocument.
     * @param {PlanningDocumentUpsertArgs} args - Arguments to update or create a PlanningDocument.
     * @example
     * // Update or create a PlanningDocument
     * const planningDocument = await prisma.planningDocument.upsert({
     *   create: {
     *     // ... data to create a PlanningDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanningDocument we want to update
     *   }
     * })
     */
    upsert<T extends PlanningDocumentUpsertArgs>(args: SelectSubset<T, PlanningDocumentUpsertArgs<ExtArgs>>): Prisma__PlanningDocumentClient<$Result.GetResult<Prisma.$PlanningDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanningDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentCountArgs} args - Arguments to filter PlanningDocuments to count.
     * @example
     * // Count the number of PlanningDocuments
     * const count = await prisma.planningDocument.count({
     *   where: {
     *     // ... the filter for the PlanningDocuments we want to count
     *   }
     * })
    **/
    count<T extends PlanningDocumentCountArgs>(
      args?: Subset<T, PlanningDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanningDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanningDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanningDocumentAggregateArgs>(args: Subset<T, PlanningDocumentAggregateArgs>): Prisma.PrismaPromise<GetPlanningDocumentAggregateType<T>>

    /**
     * Group by PlanningDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanningDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanningDocumentGroupByArgs['orderBy'] }
        : { orderBy?: PlanningDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanningDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanningDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanningDocument model
   */
  readonly fields: PlanningDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanningDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanningDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanningDocument model
   */
  interface PlanningDocumentFieldRefs {
    readonly id: FieldRef<"PlanningDocument", 'String'>
    readonly name: FieldRef<"PlanningDocument", 'String'>
    readonly description: FieldRef<"PlanningDocument", 'String'>
    readonly fileUrl: FieldRef<"PlanningDocument", 'String'>
    readonly fileSize: FieldRef<"PlanningDocument", 'Int'>
    readonly fileType: FieldRef<"PlanningDocument", 'String'>
    readonly uploadedAt: FieldRef<"PlanningDocument", 'DateTime'>
    readonly campaignId: FieldRef<"PlanningDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlanningDocument findUnique
   */
  export type PlanningDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PlanningDocument to fetch.
     */
    where: PlanningDocumentWhereUniqueInput
  }

  /**
   * PlanningDocument findUniqueOrThrow
   */
  export type PlanningDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PlanningDocument to fetch.
     */
    where: PlanningDocumentWhereUniqueInput
  }

  /**
   * PlanningDocument findFirst
   */
  export type PlanningDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PlanningDocument to fetch.
     */
    where?: PlanningDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningDocuments to fetch.
     */
    orderBy?: PlanningDocumentOrderByWithRelationInput | PlanningDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanningDocuments.
     */
    cursor?: PlanningDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanningDocuments.
     */
    distinct?: PlanningDocumentScalarFieldEnum | PlanningDocumentScalarFieldEnum[]
  }

  /**
   * PlanningDocument findFirstOrThrow
   */
  export type PlanningDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PlanningDocument to fetch.
     */
    where?: PlanningDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningDocuments to fetch.
     */
    orderBy?: PlanningDocumentOrderByWithRelationInput | PlanningDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanningDocuments.
     */
    cursor?: PlanningDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanningDocuments.
     */
    distinct?: PlanningDocumentScalarFieldEnum | PlanningDocumentScalarFieldEnum[]
  }

  /**
   * PlanningDocument findMany
   */
  export type PlanningDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PlanningDocuments to fetch.
     */
    where?: PlanningDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningDocuments to fetch.
     */
    orderBy?: PlanningDocumentOrderByWithRelationInput | PlanningDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanningDocuments.
     */
    cursor?: PlanningDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningDocuments.
     */
    skip?: number
    distinct?: PlanningDocumentScalarFieldEnum | PlanningDocumentScalarFieldEnum[]
  }

  /**
   * PlanningDocument create
   */
  export type PlanningDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanningDocument.
     */
    data: XOR<PlanningDocumentCreateInput, PlanningDocumentUncheckedCreateInput>
  }

  /**
   * PlanningDocument createMany
   */
  export type PlanningDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanningDocuments.
     */
    data: PlanningDocumentCreateManyInput | PlanningDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanningDocument createManyAndReturn
   */
  export type PlanningDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many PlanningDocuments.
     */
    data: PlanningDocumentCreateManyInput | PlanningDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanningDocument update
   */
  export type PlanningDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanningDocument.
     */
    data: XOR<PlanningDocumentUpdateInput, PlanningDocumentUncheckedUpdateInput>
    /**
     * Choose, which PlanningDocument to update.
     */
    where: PlanningDocumentWhereUniqueInput
  }

  /**
   * PlanningDocument updateMany
   */
  export type PlanningDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanningDocuments.
     */
    data: XOR<PlanningDocumentUpdateManyMutationInput, PlanningDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PlanningDocuments to update
     */
    where?: PlanningDocumentWhereInput
    /**
     * Limit how many PlanningDocuments to update.
     */
    limit?: number
  }

  /**
   * PlanningDocument updateManyAndReturn
   */
  export type PlanningDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * The data used to update PlanningDocuments.
     */
    data: XOR<PlanningDocumentUpdateManyMutationInput, PlanningDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PlanningDocuments to update
     */
    where?: PlanningDocumentWhereInput
    /**
     * Limit how many PlanningDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanningDocument upsert
   */
  export type PlanningDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanningDocument to update in case it exists.
     */
    where: PlanningDocumentWhereUniqueInput
    /**
     * In case the PlanningDocument found by the `where` argument doesn't exist, create a new PlanningDocument with this data.
     */
    create: XOR<PlanningDocumentCreateInput, PlanningDocumentUncheckedCreateInput>
    /**
     * In case the PlanningDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanningDocumentUpdateInput, PlanningDocumentUncheckedUpdateInput>
  }

  /**
   * PlanningDocument delete
   */
  export type PlanningDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
    /**
     * Filter which PlanningDocument to delete.
     */
    where: PlanningDocumentWhereUniqueInput
  }

  /**
   * PlanningDocument deleteMany
   */
  export type PlanningDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanningDocuments to delete
     */
    where?: PlanningDocumentWhereInput
    /**
     * Limit how many PlanningDocuments to delete.
     */
    limit?: number
  }

  /**
   * PlanningDocument without action
   */
  export type PlanningDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningDocument
     */
    select?: PlanningDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningDocument
     */
    omit?: PlanningDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningDocumentInclude<ExtArgs> | null
  }


  /**
   * Model MediaAsset
   */

  export type AggregateMediaAsset = {
    _count: MediaAssetCountAggregateOutputType | null
    _avg: MediaAssetAvgAggregateOutputType | null
    _sum: MediaAssetSumAggregateOutputType | null
    _min: MediaAssetMinAggregateOutputType | null
    _max: MediaAssetMaxAggregateOutputType | null
  }

  export type MediaAssetAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type MediaAssetSumAggregateOutputType = {
    fileSize: number | null
  }

  export type MediaAssetMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
  }

  export type MediaAssetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
  }

  export type MediaAssetCountAggregateOutputType = {
    id: number
    name: number
    url: number
    fileSize: number
    mimeType: number
    createdAt: number
    updatedAt: number
    campaignId: number
    _all: number
  }


  export type MediaAssetAvgAggregateInputType = {
    fileSize?: true
  }

  export type MediaAssetSumAggregateInputType = {
    fileSize?: true
  }

  export type MediaAssetMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
  }

  export type MediaAssetMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
  }

  export type MediaAssetCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    _all?: true
  }

  export type MediaAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAsset to aggregate.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaAssets
    **/
    _count?: true | MediaAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaAssetMaxAggregateInputType
  }

  export type GetMediaAssetAggregateType<T extends MediaAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaAsset[P]>
      : GetScalarType<T[P], AggregateMediaAsset[P]>
  }




  export type MediaAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAssetWhereInput
    orderBy?: MediaAssetOrderByWithAggregationInput | MediaAssetOrderByWithAggregationInput[]
    by: MediaAssetScalarFieldEnum[] | MediaAssetScalarFieldEnum
    having?: MediaAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaAssetCountAggregateInputType | true
    _avg?: MediaAssetAvgAggregateInputType
    _sum?: MediaAssetSumAggregateInputType
    _min?: MediaAssetMinAggregateInputType
    _max?: MediaAssetMaxAggregateInputType
  }

  export type MediaAssetGroupByOutputType = {
    id: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt: Date
    updatedAt: Date
    campaignId: string
    _count: MediaAssetCountAggregateOutputType | null
    _avg: MediaAssetAvgAggregateOutputType | null
    _sum: MediaAssetSumAggregateOutputType | null
    _min: MediaAssetMinAggregateOutputType | null
    _max: MediaAssetMaxAggregateOutputType | null
  }

  type GetMediaAssetGroupByPayload<T extends MediaAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaAssetGroupByOutputType[P]>
            : GetScalarType<T[P], MediaAssetGroupByOutputType[P]>
        }
      >
    >


  export type MediaAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAsset"]>

  export type MediaAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAsset"]>

  export type MediaAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAsset"]>

  export type MediaAssetSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
  }

  export type MediaAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "fileSize" | "mimeType" | "createdAt" | "updatedAt" | "campaignId", ExtArgs["result"]["mediaAsset"]>
  export type MediaAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MediaAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MediaAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $MediaAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaAsset"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      fileSize: number
      mimeType: string
      createdAt: Date
      updatedAt: Date
      campaignId: string
    }, ExtArgs["result"]["mediaAsset"]>
    composites: {}
  }

  type MediaAssetGetPayload<S extends boolean | null | undefined | MediaAssetDefaultArgs> = $Result.GetResult<Prisma.$MediaAssetPayload, S>

  type MediaAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaAssetCountAggregateInputType | true
    }

  export interface MediaAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaAsset'], meta: { name: 'MediaAsset' } }
    /**
     * Find zero or one MediaAsset that matches the filter.
     * @param {MediaAssetFindUniqueArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaAssetFindUniqueArgs>(args: SelectSubset<T, MediaAssetFindUniqueArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaAssetFindUniqueOrThrowArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindFirstArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaAssetFindFirstArgs>(args?: SelectSubset<T, MediaAssetFindFirstArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindFirstOrThrowArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaAssets
     * const mediaAssets = await prisma.mediaAsset.findMany()
     * 
     * // Get first 10 MediaAssets
     * const mediaAssets = await prisma.mediaAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaAssetFindManyArgs>(args?: SelectSubset<T, MediaAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaAsset.
     * @param {MediaAssetCreateArgs} args - Arguments to create a MediaAsset.
     * @example
     * // Create one MediaAsset
     * const MediaAsset = await prisma.mediaAsset.create({
     *   data: {
     *     // ... data to create a MediaAsset
     *   }
     * })
     * 
     */
    create<T extends MediaAssetCreateArgs>(args: SelectSubset<T, MediaAssetCreateArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaAssets.
     * @param {MediaAssetCreateManyArgs} args - Arguments to create many MediaAssets.
     * @example
     * // Create many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaAssetCreateManyArgs>(args?: SelectSubset<T, MediaAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaAssets and returns the data saved in the database.
     * @param {MediaAssetCreateManyAndReturnArgs} args - Arguments to create many MediaAssets.
     * @example
     * // Create many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaAssets and only return the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaAsset.
     * @param {MediaAssetDeleteArgs} args - Arguments to delete one MediaAsset.
     * @example
     * // Delete one MediaAsset
     * const MediaAsset = await prisma.mediaAsset.delete({
     *   where: {
     *     // ... filter to delete one MediaAsset
     *   }
     * })
     * 
     */
    delete<T extends MediaAssetDeleteArgs>(args: SelectSubset<T, MediaAssetDeleteArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaAsset.
     * @param {MediaAssetUpdateArgs} args - Arguments to update one MediaAsset.
     * @example
     * // Update one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaAssetUpdateArgs>(args: SelectSubset<T, MediaAssetUpdateArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaAssets.
     * @param {MediaAssetDeleteManyArgs} args - Arguments to filter MediaAssets to delete.
     * @example
     * // Delete a few MediaAssets
     * const { count } = await prisma.mediaAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaAssetDeleteManyArgs>(args?: SelectSubset<T, MediaAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaAssetUpdateManyArgs>(args: SelectSubset<T, MediaAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAssets and returns the data updated in the database.
     * @param {MediaAssetUpdateManyAndReturnArgs} args - Arguments to update many MediaAssets.
     * @example
     * // Update many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaAssets and only return the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaAsset.
     * @param {MediaAssetUpsertArgs} args - Arguments to update or create a MediaAsset.
     * @example
     * // Update or create a MediaAsset
     * const mediaAsset = await prisma.mediaAsset.upsert({
     *   create: {
     *     // ... data to create a MediaAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaAsset we want to update
     *   }
     * })
     */
    upsert<T extends MediaAssetUpsertArgs>(args: SelectSubset<T, MediaAssetUpsertArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetCountArgs} args - Arguments to filter MediaAssets to count.
     * @example
     * // Count the number of MediaAssets
     * const count = await prisma.mediaAsset.count({
     *   where: {
     *     // ... the filter for the MediaAssets we want to count
     *   }
     * })
    **/
    count<T extends MediaAssetCountArgs>(
      args?: Subset<T, MediaAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAssetAggregateArgs>(args: Subset<T, MediaAssetAggregateArgs>): Prisma.PrismaPromise<GetMediaAssetAggregateType<T>>

    /**
     * Group by MediaAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaAssetGroupByArgs['orderBy'] }
        : { orderBy?: MediaAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaAsset model
   */
  readonly fields: MediaAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaAsset model
   */
  interface MediaAssetFieldRefs {
    readonly id: FieldRef<"MediaAsset", 'String'>
    readonly name: FieldRef<"MediaAsset", 'String'>
    readonly url: FieldRef<"MediaAsset", 'String'>
    readonly fileSize: FieldRef<"MediaAsset", 'Int'>
    readonly mimeType: FieldRef<"MediaAsset", 'String'>
    readonly createdAt: FieldRef<"MediaAsset", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaAsset", 'DateTime'>
    readonly campaignId: FieldRef<"MediaAsset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaAsset findUnique
   */
  export type MediaAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset findUniqueOrThrow
   */
  export type MediaAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset findFirst
   */
  export type MediaAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAssets.
     */
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset findFirstOrThrow
   */
  export type MediaAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAssets.
     */
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset findMany
   */
  export type MediaAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * Filter, which MediaAssets to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset create
   */
  export type MediaAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaAsset.
     */
    data: XOR<MediaAssetCreateInput, MediaAssetUncheckedCreateInput>
  }

  /**
   * MediaAsset createMany
   */
  export type MediaAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaAssets.
     */
    data: MediaAssetCreateManyInput | MediaAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaAsset createManyAndReturn
   */
  export type MediaAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The data used to create many MediaAssets.
     */
    data: MediaAssetCreateManyInput | MediaAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaAsset update
   */
  export type MediaAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaAsset.
     */
    data: XOR<MediaAssetUpdateInput, MediaAssetUncheckedUpdateInput>
    /**
     * Choose, which MediaAsset to update.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset updateMany
   */
  export type MediaAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaAssets.
     */
    data: XOR<MediaAssetUpdateManyMutationInput, MediaAssetUncheckedUpdateManyInput>
    /**
     * Filter which MediaAssets to update
     */
    where?: MediaAssetWhereInput
    /**
     * Limit how many MediaAssets to update.
     */
    limit?: number
  }

  /**
   * MediaAsset updateManyAndReturn
   */
  export type MediaAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The data used to update MediaAssets.
     */
    data: XOR<MediaAssetUpdateManyMutationInput, MediaAssetUncheckedUpdateManyInput>
    /**
     * Filter which MediaAssets to update
     */
    where?: MediaAssetWhereInput
    /**
     * Limit how many MediaAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaAsset upsert
   */
  export type MediaAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaAsset to update in case it exists.
     */
    where: MediaAssetWhereUniqueInput
    /**
     * In case the MediaAsset found by the `where` argument doesn't exist, create a new MediaAsset with this data.
     */
    create: XOR<MediaAssetCreateInput, MediaAssetUncheckedCreateInput>
    /**
     * In case the MediaAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaAssetUpdateInput, MediaAssetUncheckedUpdateInput>
  }

  /**
   * MediaAsset delete
   */
  export type MediaAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
    /**
     * Filter which MediaAsset to delete.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset deleteMany
   */
  export type MediaAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAssets to delete
     */
    where?: MediaAssetWhereInput
    /**
     * Limit how many MediaAssets to delete.
     */
    limit?: number
  }

  /**
   * MediaAsset without action
   */
  export type MediaAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAssetInclude<ExtArgs> | null
  }


  /**
   * Model MediaRequirement
   */

  export type AggregateMediaRequirement = {
    _count: MediaRequirementCountAggregateOutputType | null
    _min: MediaRequirementMinAggregateOutputType | null
    _max: MediaRequirementMaxAggregateOutputType | null
  }

  export type MediaRequirementMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    required: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
  }

  export type MediaRequirementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    required: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
  }

  export type MediaRequirementCountAggregateOutputType = {
    id: number
    title: number
    description: number
    required: number
    status: number
    createdAt: number
    updatedAt: number
    campaignId: number
    _all: number
  }


  export type MediaRequirementMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    required?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
  }

  export type MediaRequirementMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    required?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
  }

  export type MediaRequirementCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    required?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    _all?: true
  }

  export type MediaRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaRequirement to aggregate.
     */
    where?: MediaRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRequirements to fetch.
     */
    orderBy?: MediaRequirementOrderByWithRelationInput | MediaRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaRequirements
    **/
    _count?: true | MediaRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaRequirementMaxAggregateInputType
  }

  export type GetMediaRequirementAggregateType<T extends MediaRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaRequirement[P]>
      : GetScalarType<T[P], AggregateMediaRequirement[P]>
  }




  export type MediaRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaRequirementWhereInput
    orderBy?: MediaRequirementOrderByWithAggregationInput | MediaRequirementOrderByWithAggregationInput[]
    by: MediaRequirementScalarFieldEnum[] | MediaRequirementScalarFieldEnum
    having?: MediaRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaRequirementCountAggregateInputType | true
    _min?: MediaRequirementMinAggregateInputType
    _max?: MediaRequirementMaxAggregateInputType
  }

  export type MediaRequirementGroupByOutputType = {
    id: string
    title: string
    description: string | null
    required: boolean
    status: string
    createdAt: Date
    updatedAt: Date
    campaignId: string
    _count: MediaRequirementCountAggregateOutputType | null
    _min: MediaRequirementMinAggregateOutputType | null
    _max: MediaRequirementMaxAggregateOutputType | null
  }

  type GetMediaRequirementGroupByPayload<T extends MediaRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], MediaRequirementGroupByOutputType[P]>
        }
      >
    >


  export type MediaRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    required?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaRequirement"]>

  export type MediaRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    required?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaRequirement"]>

  export type MediaRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    required?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaRequirement"]>

  export type MediaRequirementSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    required?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
  }

  export type MediaRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "required" | "status" | "createdAt" | "updatedAt" | "campaignId", ExtArgs["result"]["mediaRequirement"]>
  export type MediaRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MediaRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MediaRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $MediaRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaRequirement"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      required: boolean
      status: string
      createdAt: Date
      updatedAt: Date
      campaignId: string
    }, ExtArgs["result"]["mediaRequirement"]>
    composites: {}
  }

  type MediaRequirementGetPayload<S extends boolean | null | undefined | MediaRequirementDefaultArgs> = $Result.GetResult<Prisma.$MediaRequirementPayload, S>

  type MediaRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaRequirementCountAggregateInputType | true
    }

  export interface MediaRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaRequirement'], meta: { name: 'MediaRequirement' } }
    /**
     * Find zero or one MediaRequirement that matches the filter.
     * @param {MediaRequirementFindUniqueArgs} args - Arguments to find a MediaRequirement
     * @example
     * // Get one MediaRequirement
     * const mediaRequirement = await prisma.mediaRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaRequirementFindUniqueArgs>(args: SelectSubset<T, MediaRequirementFindUniqueArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaRequirementFindUniqueOrThrowArgs} args - Arguments to find a MediaRequirement
     * @example
     * // Get one MediaRequirement
     * const mediaRequirement = await prisma.mediaRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementFindFirstArgs} args - Arguments to find a MediaRequirement
     * @example
     * // Get one MediaRequirement
     * const mediaRequirement = await prisma.mediaRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaRequirementFindFirstArgs>(args?: SelectSubset<T, MediaRequirementFindFirstArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementFindFirstOrThrowArgs} args - Arguments to find a MediaRequirement
     * @example
     * // Get one MediaRequirement
     * const mediaRequirement = await prisma.mediaRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaRequirements
     * const mediaRequirements = await prisma.mediaRequirement.findMany()
     * 
     * // Get first 10 MediaRequirements
     * const mediaRequirements = await prisma.mediaRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaRequirementWithIdOnly = await prisma.mediaRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaRequirementFindManyArgs>(args?: SelectSubset<T, MediaRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaRequirement.
     * @param {MediaRequirementCreateArgs} args - Arguments to create a MediaRequirement.
     * @example
     * // Create one MediaRequirement
     * const MediaRequirement = await prisma.mediaRequirement.create({
     *   data: {
     *     // ... data to create a MediaRequirement
     *   }
     * })
     * 
     */
    create<T extends MediaRequirementCreateArgs>(args: SelectSubset<T, MediaRequirementCreateArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaRequirements.
     * @param {MediaRequirementCreateManyArgs} args - Arguments to create many MediaRequirements.
     * @example
     * // Create many MediaRequirements
     * const mediaRequirement = await prisma.mediaRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaRequirementCreateManyArgs>(args?: SelectSubset<T, MediaRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaRequirements and returns the data saved in the database.
     * @param {MediaRequirementCreateManyAndReturnArgs} args - Arguments to create many MediaRequirements.
     * @example
     * // Create many MediaRequirements
     * const mediaRequirement = await prisma.mediaRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaRequirements and only return the `id`
     * const mediaRequirementWithIdOnly = await prisma.mediaRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaRequirement.
     * @param {MediaRequirementDeleteArgs} args - Arguments to delete one MediaRequirement.
     * @example
     * // Delete one MediaRequirement
     * const MediaRequirement = await prisma.mediaRequirement.delete({
     *   where: {
     *     // ... filter to delete one MediaRequirement
     *   }
     * })
     * 
     */
    delete<T extends MediaRequirementDeleteArgs>(args: SelectSubset<T, MediaRequirementDeleteArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaRequirement.
     * @param {MediaRequirementUpdateArgs} args - Arguments to update one MediaRequirement.
     * @example
     * // Update one MediaRequirement
     * const mediaRequirement = await prisma.mediaRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaRequirementUpdateArgs>(args: SelectSubset<T, MediaRequirementUpdateArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaRequirements.
     * @param {MediaRequirementDeleteManyArgs} args - Arguments to filter MediaRequirements to delete.
     * @example
     * // Delete a few MediaRequirements
     * const { count } = await prisma.mediaRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaRequirementDeleteManyArgs>(args?: SelectSubset<T, MediaRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaRequirements
     * const mediaRequirement = await prisma.mediaRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaRequirementUpdateManyArgs>(args: SelectSubset<T, MediaRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaRequirements and returns the data updated in the database.
     * @param {MediaRequirementUpdateManyAndReturnArgs} args - Arguments to update many MediaRequirements.
     * @example
     * // Update many MediaRequirements
     * const mediaRequirement = await prisma.mediaRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaRequirements and only return the `id`
     * const mediaRequirementWithIdOnly = await prisma.mediaRequirement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaRequirement.
     * @param {MediaRequirementUpsertArgs} args - Arguments to update or create a MediaRequirement.
     * @example
     * // Update or create a MediaRequirement
     * const mediaRequirement = await prisma.mediaRequirement.upsert({
     *   create: {
     *     // ... data to create a MediaRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaRequirement we want to update
     *   }
     * })
     */
    upsert<T extends MediaRequirementUpsertArgs>(args: SelectSubset<T, MediaRequirementUpsertArgs<ExtArgs>>): Prisma__MediaRequirementClient<$Result.GetResult<Prisma.$MediaRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementCountArgs} args - Arguments to filter MediaRequirements to count.
     * @example
     * // Count the number of MediaRequirements
     * const count = await prisma.mediaRequirement.count({
     *   where: {
     *     // ... the filter for the MediaRequirements we want to count
     *   }
     * })
    **/
    count<T extends MediaRequirementCountArgs>(
      args?: Subset<T, MediaRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaRequirementAggregateArgs>(args: Subset<T, MediaRequirementAggregateArgs>): Prisma.PrismaPromise<GetMediaRequirementAggregateType<T>>

    /**
     * Group by MediaRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaRequirementGroupByArgs['orderBy'] }
        : { orderBy?: MediaRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaRequirement model
   */
  readonly fields: MediaRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaRequirement model
   */
  interface MediaRequirementFieldRefs {
    readonly id: FieldRef<"MediaRequirement", 'String'>
    readonly title: FieldRef<"MediaRequirement", 'String'>
    readonly description: FieldRef<"MediaRequirement", 'String'>
    readonly required: FieldRef<"MediaRequirement", 'Boolean'>
    readonly status: FieldRef<"MediaRequirement", 'String'>
    readonly createdAt: FieldRef<"MediaRequirement", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaRequirement", 'DateTime'>
    readonly campaignId: FieldRef<"MediaRequirement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaRequirement findUnique
   */
  export type MediaRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * Filter, which MediaRequirement to fetch.
     */
    where: MediaRequirementWhereUniqueInput
  }

  /**
   * MediaRequirement findUniqueOrThrow
   */
  export type MediaRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * Filter, which MediaRequirement to fetch.
     */
    where: MediaRequirementWhereUniqueInput
  }

  /**
   * MediaRequirement findFirst
   */
  export type MediaRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * Filter, which MediaRequirement to fetch.
     */
    where?: MediaRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRequirements to fetch.
     */
    orderBy?: MediaRequirementOrderByWithRelationInput | MediaRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaRequirements.
     */
    cursor?: MediaRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaRequirements.
     */
    distinct?: MediaRequirementScalarFieldEnum | MediaRequirementScalarFieldEnum[]
  }

  /**
   * MediaRequirement findFirstOrThrow
   */
  export type MediaRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * Filter, which MediaRequirement to fetch.
     */
    where?: MediaRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRequirements to fetch.
     */
    orderBy?: MediaRequirementOrderByWithRelationInput | MediaRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaRequirements.
     */
    cursor?: MediaRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaRequirements.
     */
    distinct?: MediaRequirementScalarFieldEnum | MediaRequirementScalarFieldEnum[]
  }

  /**
   * MediaRequirement findMany
   */
  export type MediaRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * Filter, which MediaRequirements to fetch.
     */
    where?: MediaRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaRequirements to fetch.
     */
    orderBy?: MediaRequirementOrderByWithRelationInput | MediaRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaRequirements.
     */
    cursor?: MediaRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaRequirements.
     */
    skip?: number
    distinct?: MediaRequirementScalarFieldEnum | MediaRequirementScalarFieldEnum[]
  }

  /**
   * MediaRequirement create
   */
  export type MediaRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaRequirement.
     */
    data: XOR<MediaRequirementCreateInput, MediaRequirementUncheckedCreateInput>
  }

  /**
   * MediaRequirement createMany
   */
  export type MediaRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaRequirements.
     */
    data: MediaRequirementCreateManyInput | MediaRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaRequirement createManyAndReturn
   */
  export type MediaRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many MediaRequirements.
     */
    data: MediaRequirementCreateManyInput | MediaRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaRequirement update
   */
  export type MediaRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaRequirement.
     */
    data: XOR<MediaRequirementUpdateInput, MediaRequirementUncheckedUpdateInput>
    /**
     * Choose, which MediaRequirement to update.
     */
    where: MediaRequirementWhereUniqueInput
  }

  /**
   * MediaRequirement updateMany
   */
  export type MediaRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaRequirements.
     */
    data: XOR<MediaRequirementUpdateManyMutationInput, MediaRequirementUncheckedUpdateManyInput>
    /**
     * Filter which MediaRequirements to update
     */
    where?: MediaRequirementWhereInput
    /**
     * Limit how many MediaRequirements to update.
     */
    limit?: number
  }

  /**
   * MediaRequirement updateManyAndReturn
   */
  export type MediaRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * The data used to update MediaRequirements.
     */
    data: XOR<MediaRequirementUpdateManyMutationInput, MediaRequirementUncheckedUpdateManyInput>
    /**
     * Filter which MediaRequirements to update
     */
    where?: MediaRequirementWhereInput
    /**
     * Limit how many MediaRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaRequirement upsert
   */
  export type MediaRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaRequirement to update in case it exists.
     */
    where: MediaRequirementWhereUniqueInput
    /**
     * In case the MediaRequirement found by the `where` argument doesn't exist, create a new MediaRequirement with this data.
     */
    create: XOR<MediaRequirementCreateInput, MediaRequirementUncheckedCreateInput>
    /**
     * In case the MediaRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaRequirementUpdateInput, MediaRequirementUncheckedUpdateInput>
  }

  /**
   * MediaRequirement delete
   */
  export type MediaRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
    /**
     * Filter which MediaRequirement to delete.
     */
    where: MediaRequirementWhereUniqueInput
  }

  /**
   * MediaRequirement deleteMany
   */
  export type MediaRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaRequirements to delete
     */
    where?: MediaRequirementWhereInput
    /**
     * Limit how many MediaRequirements to delete.
     */
    limit?: number
  }

  /**
   * MediaRequirement without action
   */
  export type MediaRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaRequirement
     */
    select?: MediaRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaRequirement
     */
    omit?: MediaRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaRequirementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const ContentItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    contentType: 'contentType',
    mediaUrl: 'mediaUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId'
  };

  export type ContentItemScalarFieldEnum = (typeof ContentItemScalarFieldEnum)[keyof typeof ContentItemScalarFieldEnum]


  export const PlanningDocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    fileType: 'fileType',
    uploadedAt: 'uploadedAt',
    campaignId: 'campaignId'
  };

  export type PlanningDocumentScalarFieldEnum = (typeof PlanningDocumentScalarFieldEnum)[keyof typeof PlanningDocumentScalarFieldEnum]


  export const MediaAssetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId'
  };

  export type MediaAssetScalarFieldEnum = (typeof MediaAssetScalarFieldEnum)[keyof typeof MediaAssetScalarFieldEnum]


  export const MediaRequirementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    required: 'required',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId'
  };

  export type MediaRequirementScalarFieldEnum = (typeof MediaRequirementScalarFieldEnum)[keyof typeof MediaRequirementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    campaigns?: CampaignListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    campaigns?: CampaignListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    isActive?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    createdById?: StringFilter<"Campaign"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    contentItems?: ContentItemListRelationFilter
    planningDocuments?: PlanningDocumentListRelationFilter
    mediaAssets?: MediaAssetListRelationFilter
    mediaRequirements?: MediaRequirementListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    contentItems?: ContentItemOrderByRelationAggregateInput
    planningDocuments?: PlanningDocumentOrderByRelationAggregateInput
    mediaAssets?: MediaAssetOrderByRelationAggregateInput
    mediaRequirements?: MediaRequirementOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    isActive?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    createdById?: StringFilter<"Campaign"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    contentItems?: ContentItemListRelationFilter
    planningDocuments?: PlanningDocumentListRelationFilter
    mediaAssets?: MediaAssetListRelationFilter
    mediaRequirements?: MediaRequirementListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Campaign"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    createdById?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type ContentItemWhereInput = {
    AND?: ContentItemWhereInput | ContentItemWhereInput[]
    OR?: ContentItemWhereInput[]
    NOT?: ContentItemWhereInput | ContentItemWhereInput[]
    id?: StringFilter<"ContentItem"> | string
    title?: StringFilter<"ContentItem"> | string
    body?: StringFilter<"ContentItem"> | string
    contentType?: StringFilter<"ContentItem"> | string
    mediaUrl?: StringNullableFilter<"ContentItem"> | string | null
    status?: StringFilter<"ContentItem"> | string
    createdAt?: DateTimeFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItem"> | Date | string
    campaignId?: StringFilter<"ContentItem"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type ContentItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    contentType?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type ContentItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentItemWhereInput | ContentItemWhereInput[]
    OR?: ContentItemWhereInput[]
    NOT?: ContentItemWhereInput | ContentItemWhereInput[]
    title?: StringFilter<"ContentItem"> | string
    body?: StringFilter<"ContentItem"> | string
    contentType?: StringFilter<"ContentItem"> | string
    mediaUrl?: StringNullableFilter<"ContentItem"> | string | null
    status?: StringFilter<"ContentItem"> | string
    createdAt?: DateTimeFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItem"> | Date | string
    campaignId?: StringFilter<"ContentItem"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type ContentItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    contentType?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    _count?: ContentItemCountOrderByAggregateInput
    _max?: ContentItemMaxOrderByAggregateInput
    _min?: ContentItemMinOrderByAggregateInput
  }

  export type ContentItemScalarWhereWithAggregatesInput = {
    AND?: ContentItemScalarWhereWithAggregatesInput | ContentItemScalarWhereWithAggregatesInput[]
    OR?: ContentItemScalarWhereWithAggregatesInput[]
    NOT?: ContentItemScalarWhereWithAggregatesInput | ContentItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentItem"> | string
    title?: StringWithAggregatesFilter<"ContentItem"> | string
    body?: StringWithAggregatesFilter<"ContentItem"> | string
    contentType?: StringWithAggregatesFilter<"ContentItem"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"ContentItem"> | string | null
    status?: StringWithAggregatesFilter<"ContentItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentItem"> | Date | string
    campaignId?: StringWithAggregatesFilter<"ContentItem"> | string
  }

  export type PlanningDocumentWhereInput = {
    AND?: PlanningDocumentWhereInput | PlanningDocumentWhereInput[]
    OR?: PlanningDocumentWhereInput[]
    NOT?: PlanningDocumentWhereInput | PlanningDocumentWhereInput[]
    id?: StringFilter<"PlanningDocument"> | string
    name?: StringFilter<"PlanningDocument"> | string
    description?: StringNullableFilter<"PlanningDocument"> | string | null
    fileUrl?: StringFilter<"PlanningDocument"> | string
    fileSize?: IntFilter<"PlanningDocument"> | number
    fileType?: StringFilter<"PlanningDocument"> | string
    uploadedAt?: DateTimeFilter<"PlanningDocument"> | Date | string
    campaignId?: StringFilter<"PlanningDocument"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type PlanningDocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type PlanningDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanningDocumentWhereInput | PlanningDocumentWhereInput[]
    OR?: PlanningDocumentWhereInput[]
    NOT?: PlanningDocumentWhereInput | PlanningDocumentWhereInput[]
    name?: StringFilter<"PlanningDocument"> | string
    description?: StringNullableFilter<"PlanningDocument"> | string | null
    fileUrl?: StringFilter<"PlanningDocument"> | string
    fileSize?: IntFilter<"PlanningDocument"> | number
    fileType?: StringFilter<"PlanningDocument"> | string
    uploadedAt?: DateTimeFilter<"PlanningDocument"> | Date | string
    campaignId?: StringFilter<"PlanningDocument"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type PlanningDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    campaignId?: SortOrder
    _count?: PlanningDocumentCountOrderByAggregateInput
    _avg?: PlanningDocumentAvgOrderByAggregateInput
    _max?: PlanningDocumentMaxOrderByAggregateInput
    _min?: PlanningDocumentMinOrderByAggregateInput
    _sum?: PlanningDocumentSumOrderByAggregateInput
  }

  export type PlanningDocumentScalarWhereWithAggregatesInput = {
    AND?: PlanningDocumentScalarWhereWithAggregatesInput | PlanningDocumentScalarWhereWithAggregatesInput[]
    OR?: PlanningDocumentScalarWhereWithAggregatesInput[]
    NOT?: PlanningDocumentScalarWhereWithAggregatesInput | PlanningDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanningDocument"> | string
    name?: StringWithAggregatesFilter<"PlanningDocument"> | string
    description?: StringNullableWithAggregatesFilter<"PlanningDocument"> | string | null
    fileUrl?: StringWithAggregatesFilter<"PlanningDocument"> | string
    fileSize?: IntWithAggregatesFilter<"PlanningDocument"> | number
    fileType?: StringWithAggregatesFilter<"PlanningDocument"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"PlanningDocument"> | Date | string
    campaignId?: StringWithAggregatesFilter<"PlanningDocument"> | string
  }

  export type MediaAssetWhereInput = {
    AND?: MediaAssetWhereInput | MediaAssetWhereInput[]
    OR?: MediaAssetWhereInput[]
    NOT?: MediaAssetWhereInput | MediaAssetWhereInput[]
    id?: StringFilter<"MediaAsset"> | string
    name?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    fileSize?: IntFilter<"MediaAsset"> | number
    mimeType?: StringFilter<"MediaAsset"> | string
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
    updatedAt?: DateTimeFilter<"MediaAsset"> | Date | string
    campaignId?: StringFilter<"MediaAsset"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type MediaAssetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type MediaAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaAssetWhereInput | MediaAssetWhereInput[]
    OR?: MediaAssetWhereInput[]
    NOT?: MediaAssetWhereInput | MediaAssetWhereInput[]
    name?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    fileSize?: IntFilter<"MediaAsset"> | number
    mimeType?: StringFilter<"MediaAsset"> | string
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
    updatedAt?: DateTimeFilter<"MediaAsset"> | Date | string
    campaignId?: StringFilter<"MediaAsset"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type MediaAssetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    _count?: MediaAssetCountOrderByAggregateInput
    _avg?: MediaAssetAvgOrderByAggregateInput
    _max?: MediaAssetMaxOrderByAggregateInput
    _min?: MediaAssetMinOrderByAggregateInput
    _sum?: MediaAssetSumOrderByAggregateInput
  }

  export type MediaAssetScalarWhereWithAggregatesInput = {
    AND?: MediaAssetScalarWhereWithAggregatesInput | MediaAssetScalarWhereWithAggregatesInput[]
    OR?: MediaAssetScalarWhereWithAggregatesInput[]
    NOT?: MediaAssetScalarWhereWithAggregatesInput | MediaAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaAsset"> | string
    name?: StringWithAggregatesFilter<"MediaAsset"> | string
    url?: StringWithAggregatesFilter<"MediaAsset"> | string
    fileSize?: IntWithAggregatesFilter<"MediaAsset"> | number
    mimeType?: StringWithAggregatesFilter<"MediaAsset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaAsset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaAsset"> | Date | string
    campaignId?: StringWithAggregatesFilter<"MediaAsset"> | string
  }

  export type MediaRequirementWhereInput = {
    AND?: MediaRequirementWhereInput | MediaRequirementWhereInput[]
    OR?: MediaRequirementWhereInput[]
    NOT?: MediaRequirementWhereInput | MediaRequirementWhereInput[]
    id?: StringFilter<"MediaRequirement"> | string
    title?: StringFilter<"MediaRequirement"> | string
    description?: StringNullableFilter<"MediaRequirement"> | string | null
    required?: BoolFilter<"MediaRequirement"> | boolean
    status?: StringFilter<"MediaRequirement"> | string
    createdAt?: DateTimeFilter<"MediaRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"MediaRequirement"> | Date | string
    campaignId?: StringFilter<"MediaRequirement"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type MediaRequirementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    required?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type MediaRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaRequirementWhereInput | MediaRequirementWhereInput[]
    OR?: MediaRequirementWhereInput[]
    NOT?: MediaRequirementWhereInput | MediaRequirementWhereInput[]
    title?: StringFilter<"MediaRequirement"> | string
    description?: StringNullableFilter<"MediaRequirement"> | string | null
    required?: BoolFilter<"MediaRequirement"> | boolean
    status?: StringFilter<"MediaRequirement"> | string
    createdAt?: DateTimeFilter<"MediaRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"MediaRequirement"> | Date | string
    campaignId?: StringFilter<"MediaRequirement"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type MediaRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    required?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    _count?: MediaRequirementCountOrderByAggregateInput
    _max?: MediaRequirementMaxOrderByAggregateInput
    _min?: MediaRequirementMinOrderByAggregateInput
  }

  export type MediaRequirementScalarWhereWithAggregatesInput = {
    AND?: MediaRequirementScalarWhereWithAggregatesInput | MediaRequirementScalarWhereWithAggregatesInput[]
    OR?: MediaRequirementScalarWhereWithAggregatesInput[]
    NOT?: MediaRequirementScalarWhereWithAggregatesInput | MediaRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaRequirement"> | string
    title?: StringWithAggregatesFilter<"MediaRequirement"> | string
    description?: StringNullableWithAggregatesFilter<"MediaRequirement"> | string | null
    required?: BoolWithAggregatesFilter<"MediaRequirement"> | boolean
    status?: StringWithAggregatesFilter<"MediaRequirement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaRequirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaRequirement"> | Date | string
    campaignId?: StringWithAggregatesFilter<"MediaRequirement"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    contentItems?: ContentItemCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentUncheckedCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetUncheckedCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    contentItems?: ContentItemUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    contentItems?: ContentItemUncheckedUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUncheckedUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUncheckedUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ContentItemCreateInput = {
    id?: string
    title: string
    body: string
    contentType: string
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutContentItemsInput
  }

  export type ContentItemUncheckedCreateInput = {
    id?: string
    title: string
    body: string
    contentType: string
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type ContentItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutContentItemsNestedInput
  }

  export type ContentItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type ContentItemCreateManyInput = {
    id?: string
    title: string
    body: string
    contentType: string
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type ContentItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanningDocumentCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPlanningDocumentsInput
  }

  export type PlanningDocumentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
    campaignId: string
  }

  export type PlanningDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPlanningDocumentsNestedInput
  }

  export type PlanningDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanningDocumentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
    campaignId: string
  }

  export type PlanningDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanningDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaAssetCreateInput = {
    id?: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutMediaAssetsInput
  }

  export type MediaAssetUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type MediaAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutMediaAssetsNestedInput
  }

  export type MediaAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaAssetCreateManyInput = {
    id?: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type MediaAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRequirementCreateInput = {
    id?: string
    title: string
    description?: string | null
    required?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutMediaRequirementsInput
  }

  export type MediaRequirementUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    required?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type MediaRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutMediaRequirementsNestedInput
  }

  export type MediaRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaRequirementCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    required?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type MediaRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContentItemListRelationFilter = {
    every?: ContentItemWhereInput
    some?: ContentItemWhereInput
    none?: ContentItemWhereInput
  }

  export type PlanningDocumentListRelationFilter = {
    every?: PlanningDocumentWhereInput
    some?: PlanningDocumentWhereInput
    none?: PlanningDocumentWhereInput
  }

  export type MediaAssetListRelationFilter = {
    every?: MediaAssetWhereInput
    some?: MediaAssetWhereInput
    none?: MediaAssetWhereInput
  }

  export type MediaRequirementListRelationFilter = {
    every?: MediaRequirementWhereInput
    some?: MediaRequirementWhereInput
    none?: MediaRequirementWhereInput
  }

  export type ContentItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanningDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type ContentItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    contentType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type ContentItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    contentType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type ContentItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    contentType?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlanningDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type PlanningDocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type PlanningDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type PlanningDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type PlanningDocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MediaAssetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MediaAssetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type MediaAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MediaAssetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MediaAssetSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type MediaRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    required?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MediaRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    required?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MediaRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    required?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
  }

  export type CampaignCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CampaignUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatedByInput | CampaignUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatedByInput | CampaignUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatedByInput | CampaignUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatedByInput | CampaignUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatedByInput | CampaignUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatedByInput | CampaignUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentItemCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ContentItemCreateWithoutCampaignInput, ContentItemUncheckedCreateWithoutCampaignInput> | ContentItemCreateWithoutCampaignInput[] | ContentItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutCampaignInput | ContentItemCreateOrConnectWithoutCampaignInput[]
    createMany?: ContentItemCreateManyCampaignInputEnvelope
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
  }

  export type PlanningDocumentCreateNestedManyWithoutCampaignInput = {
    create?: XOR<PlanningDocumentCreateWithoutCampaignInput, PlanningDocumentUncheckedCreateWithoutCampaignInput> | PlanningDocumentCreateWithoutCampaignInput[] | PlanningDocumentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlanningDocumentCreateOrConnectWithoutCampaignInput | PlanningDocumentCreateOrConnectWithoutCampaignInput[]
    createMany?: PlanningDocumentCreateManyCampaignInputEnvelope
    connect?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
  }

  export type MediaAssetCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MediaAssetCreateWithoutCampaignInput, MediaAssetUncheckedCreateWithoutCampaignInput> | MediaAssetCreateWithoutCampaignInput[] | MediaAssetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaAssetCreateOrConnectWithoutCampaignInput | MediaAssetCreateOrConnectWithoutCampaignInput[]
    createMany?: MediaAssetCreateManyCampaignInputEnvelope
    connect?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
  }

  export type MediaRequirementCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MediaRequirementCreateWithoutCampaignInput, MediaRequirementUncheckedCreateWithoutCampaignInput> | MediaRequirementCreateWithoutCampaignInput[] | MediaRequirementUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaRequirementCreateOrConnectWithoutCampaignInput | MediaRequirementCreateOrConnectWithoutCampaignInput[]
    createMany?: MediaRequirementCreateManyCampaignInputEnvelope
    connect?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
  }

  export type ContentItemUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ContentItemCreateWithoutCampaignInput, ContentItemUncheckedCreateWithoutCampaignInput> | ContentItemCreateWithoutCampaignInput[] | ContentItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutCampaignInput | ContentItemCreateOrConnectWithoutCampaignInput[]
    createMany?: ContentItemCreateManyCampaignInputEnvelope
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
  }

  export type PlanningDocumentUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<PlanningDocumentCreateWithoutCampaignInput, PlanningDocumentUncheckedCreateWithoutCampaignInput> | PlanningDocumentCreateWithoutCampaignInput[] | PlanningDocumentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlanningDocumentCreateOrConnectWithoutCampaignInput | PlanningDocumentCreateOrConnectWithoutCampaignInput[]
    createMany?: PlanningDocumentCreateManyCampaignInputEnvelope
    connect?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
  }

  export type MediaAssetUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MediaAssetCreateWithoutCampaignInput, MediaAssetUncheckedCreateWithoutCampaignInput> | MediaAssetCreateWithoutCampaignInput[] | MediaAssetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaAssetCreateOrConnectWithoutCampaignInput | MediaAssetCreateOrConnectWithoutCampaignInput[]
    createMany?: MediaAssetCreateManyCampaignInputEnvelope
    connect?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
  }

  export type MediaRequirementUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MediaRequirementCreateWithoutCampaignInput, MediaRequirementUncheckedCreateWithoutCampaignInput> | MediaRequirementCreateWithoutCampaignInput[] | MediaRequirementUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaRequirementCreateOrConnectWithoutCampaignInput | MediaRequirementCreateOrConnectWithoutCampaignInput[]
    createMany?: MediaRequirementCreateManyCampaignInputEnvelope
    connect?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type ContentItemUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ContentItemCreateWithoutCampaignInput, ContentItemUncheckedCreateWithoutCampaignInput> | ContentItemCreateWithoutCampaignInput[] | ContentItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutCampaignInput | ContentItemCreateOrConnectWithoutCampaignInput[]
    upsert?: ContentItemUpsertWithWhereUniqueWithoutCampaignInput | ContentItemUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ContentItemCreateManyCampaignInputEnvelope
    set?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    disconnect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    delete?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    update?: ContentItemUpdateWithWhereUniqueWithoutCampaignInput | ContentItemUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ContentItemUpdateManyWithWhereWithoutCampaignInput | ContentItemUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
  }

  export type PlanningDocumentUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<PlanningDocumentCreateWithoutCampaignInput, PlanningDocumentUncheckedCreateWithoutCampaignInput> | PlanningDocumentCreateWithoutCampaignInput[] | PlanningDocumentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlanningDocumentCreateOrConnectWithoutCampaignInput | PlanningDocumentCreateOrConnectWithoutCampaignInput[]
    upsert?: PlanningDocumentUpsertWithWhereUniqueWithoutCampaignInput | PlanningDocumentUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: PlanningDocumentCreateManyCampaignInputEnvelope
    set?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    disconnect?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    delete?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    connect?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    update?: PlanningDocumentUpdateWithWhereUniqueWithoutCampaignInput | PlanningDocumentUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: PlanningDocumentUpdateManyWithWhereWithoutCampaignInput | PlanningDocumentUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: PlanningDocumentScalarWhereInput | PlanningDocumentScalarWhereInput[]
  }

  export type MediaAssetUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MediaAssetCreateWithoutCampaignInput, MediaAssetUncheckedCreateWithoutCampaignInput> | MediaAssetCreateWithoutCampaignInput[] | MediaAssetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaAssetCreateOrConnectWithoutCampaignInput | MediaAssetCreateOrConnectWithoutCampaignInput[]
    upsert?: MediaAssetUpsertWithWhereUniqueWithoutCampaignInput | MediaAssetUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MediaAssetCreateManyCampaignInputEnvelope
    set?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    disconnect?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    delete?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    connect?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    update?: MediaAssetUpdateWithWhereUniqueWithoutCampaignInput | MediaAssetUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MediaAssetUpdateManyWithWhereWithoutCampaignInput | MediaAssetUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MediaAssetScalarWhereInput | MediaAssetScalarWhereInput[]
  }

  export type MediaRequirementUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MediaRequirementCreateWithoutCampaignInput, MediaRequirementUncheckedCreateWithoutCampaignInput> | MediaRequirementCreateWithoutCampaignInput[] | MediaRequirementUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaRequirementCreateOrConnectWithoutCampaignInput | MediaRequirementCreateOrConnectWithoutCampaignInput[]
    upsert?: MediaRequirementUpsertWithWhereUniqueWithoutCampaignInput | MediaRequirementUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MediaRequirementCreateManyCampaignInputEnvelope
    set?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    disconnect?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    delete?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    connect?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    update?: MediaRequirementUpdateWithWhereUniqueWithoutCampaignInput | MediaRequirementUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MediaRequirementUpdateManyWithWhereWithoutCampaignInput | MediaRequirementUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MediaRequirementScalarWhereInput | MediaRequirementScalarWhereInput[]
  }

  export type ContentItemUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ContentItemCreateWithoutCampaignInput, ContentItemUncheckedCreateWithoutCampaignInput> | ContentItemCreateWithoutCampaignInput[] | ContentItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutCampaignInput | ContentItemCreateOrConnectWithoutCampaignInput[]
    upsert?: ContentItemUpsertWithWhereUniqueWithoutCampaignInput | ContentItemUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ContentItemCreateManyCampaignInputEnvelope
    set?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    disconnect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    delete?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    update?: ContentItemUpdateWithWhereUniqueWithoutCampaignInput | ContentItemUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ContentItemUpdateManyWithWhereWithoutCampaignInput | ContentItemUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
  }

  export type PlanningDocumentUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<PlanningDocumentCreateWithoutCampaignInput, PlanningDocumentUncheckedCreateWithoutCampaignInput> | PlanningDocumentCreateWithoutCampaignInput[] | PlanningDocumentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlanningDocumentCreateOrConnectWithoutCampaignInput | PlanningDocumentCreateOrConnectWithoutCampaignInput[]
    upsert?: PlanningDocumentUpsertWithWhereUniqueWithoutCampaignInput | PlanningDocumentUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: PlanningDocumentCreateManyCampaignInputEnvelope
    set?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    disconnect?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    delete?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    connect?: PlanningDocumentWhereUniqueInput | PlanningDocumentWhereUniqueInput[]
    update?: PlanningDocumentUpdateWithWhereUniqueWithoutCampaignInput | PlanningDocumentUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: PlanningDocumentUpdateManyWithWhereWithoutCampaignInput | PlanningDocumentUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: PlanningDocumentScalarWhereInput | PlanningDocumentScalarWhereInput[]
  }

  export type MediaAssetUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MediaAssetCreateWithoutCampaignInput, MediaAssetUncheckedCreateWithoutCampaignInput> | MediaAssetCreateWithoutCampaignInput[] | MediaAssetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaAssetCreateOrConnectWithoutCampaignInput | MediaAssetCreateOrConnectWithoutCampaignInput[]
    upsert?: MediaAssetUpsertWithWhereUniqueWithoutCampaignInput | MediaAssetUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MediaAssetCreateManyCampaignInputEnvelope
    set?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    disconnect?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    delete?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    connect?: MediaAssetWhereUniqueInput | MediaAssetWhereUniqueInput[]
    update?: MediaAssetUpdateWithWhereUniqueWithoutCampaignInput | MediaAssetUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MediaAssetUpdateManyWithWhereWithoutCampaignInput | MediaAssetUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MediaAssetScalarWhereInput | MediaAssetScalarWhereInput[]
  }

  export type MediaRequirementUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MediaRequirementCreateWithoutCampaignInput, MediaRequirementUncheckedCreateWithoutCampaignInput> | MediaRequirementCreateWithoutCampaignInput[] | MediaRequirementUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MediaRequirementCreateOrConnectWithoutCampaignInput | MediaRequirementCreateOrConnectWithoutCampaignInput[]
    upsert?: MediaRequirementUpsertWithWhereUniqueWithoutCampaignInput | MediaRequirementUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MediaRequirementCreateManyCampaignInputEnvelope
    set?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    disconnect?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    delete?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    connect?: MediaRequirementWhereUniqueInput | MediaRequirementWhereUniqueInput[]
    update?: MediaRequirementUpdateWithWhereUniqueWithoutCampaignInput | MediaRequirementUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MediaRequirementUpdateManyWithWhereWithoutCampaignInput | MediaRequirementUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MediaRequirementScalarWhereInput | MediaRequirementScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutContentItemsInput = {
    create?: XOR<CampaignCreateWithoutContentItemsInput, CampaignUncheckedCreateWithoutContentItemsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutContentItemsInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutContentItemsNestedInput = {
    create?: XOR<CampaignCreateWithoutContentItemsInput, CampaignUncheckedCreateWithoutContentItemsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutContentItemsInput
    upsert?: CampaignUpsertWithoutContentItemsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutContentItemsInput, CampaignUpdateWithoutContentItemsInput>, CampaignUncheckedUpdateWithoutContentItemsInput>
  }

  export type CampaignCreateNestedOneWithoutPlanningDocumentsInput = {
    create?: XOR<CampaignCreateWithoutPlanningDocumentsInput, CampaignUncheckedCreateWithoutPlanningDocumentsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPlanningDocumentsInput
    connect?: CampaignWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CampaignUpdateOneRequiredWithoutPlanningDocumentsNestedInput = {
    create?: XOR<CampaignCreateWithoutPlanningDocumentsInput, CampaignUncheckedCreateWithoutPlanningDocumentsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPlanningDocumentsInput
    upsert?: CampaignUpsertWithoutPlanningDocumentsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutPlanningDocumentsInput, CampaignUpdateWithoutPlanningDocumentsInput>, CampaignUncheckedUpdateWithoutPlanningDocumentsInput>
  }

  export type CampaignCreateNestedOneWithoutMediaAssetsInput = {
    create?: XOR<CampaignCreateWithoutMediaAssetsInput, CampaignUncheckedCreateWithoutMediaAssetsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMediaAssetsInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutMediaAssetsNestedInput = {
    create?: XOR<CampaignCreateWithoutMediaAssetsInput, CampaignUncheckedCreateWithoutMediaAssetsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMediaAssetsInput
    upsert?: CampaignUpsertWithoutMediaAssetsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutMediaAssetsInput, CampaignUpdateWithoutMediaAssetsInput>, CampaignUncheckedUpdateWithoutMediaAssetsInput>
  }

  export type CampaignCreateNestedOneWithoutMediaRequirementsInput = {
    create?: XOR<CampaignCreateWithoutMediaRequirementsInput, CampaignUncheckedCreateWithoutMediaRequirementsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMediaRequirementsInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutMediaRequirementsNestedInput = {
    create?: XOR<CampaignCreateWithoutMediaRequirementsInput, CampaignUncheckedCreateWithoutMediaRequirementsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMediaRequirementsInput
    upsert?: CampaignUpsertWithoutMediaRequirementsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutMediaRequirementsInput, CampaignUpdateWithoutMediaRequirementsInput>, CampaignUncheckedUpdateWithoutMediaRequirementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CampaignCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentItems?: ContentItemCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentUncheckedCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetUncheckedCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput>
  }

  export type CampaignCreateManyCreatedByInputEnvelope = {
    data: CampaignCreateManyCreatedByInput | CampaignCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCreatedByInput, CampaignUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCreatedByInput, CampaignUncheckedUpdateWithoutCreatedByInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCreatedByInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    isActive?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    createdById?: StringFilter<"Campaign"> | string
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type ContentItemCreateWithoutCampaignInput = {
    id?: string
    title: string
    body: string
    contentType: string
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemUncheckedCreateWithoutCampaignInput = {
    id?: string
    title: string
    body: string
    contentType: string
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemCreateOrConnectWithoutCampaignInput = {
    where: ContentItemWhereUniqueInput
    create: XOR<ContentItemCreateWithoutCampaignInput, ContentItemUncheckedCreateWithoutCampaignInput>
  }

  export type ContentItemCreateManyCampaignInputEnvelope = {
    data: ContentItemCreateManyCampaignInput | ContentItemCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type PlanningDocumentCreateWithoutCampaignInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type PlanningDocumentUncheckedCreateWithoutCampaignInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type PlanningDocumentCreateOrConnectWithoutCampaignInput = {
    where: PlanningDocumentWhereUniqueInput
    create: XOR<PlanningDocumentCreateWithoutCampaignInput, PlanningDocumentUncheckedCreateWithoutCampaignInput>
  }

  export type PlanningDocumentCreateManyCampaignInputEnvelope = {
    data: PlanningDocumentCreateManyCampaignInput | PlanningDocumentCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type MediaAssetCreateWithoutCampaignInput = {
    id?: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaAssetUncheckedCreateWithoutCampaignInput = {
    id?: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaAssetCreateOrConnectWithoutCampaignInput = {
    where: MediaAssetWhereUniqueInput
    create: XOR<MediaAssetCreateWithoutCampaignInput, MediaAssetUncheckedCreateWithoutCampaignInput>
  }

  export type MediaAssetCreateManyCampaignInputEnvelope = {
    data: MediaAssetCreateManyCampaignInput | MediaAssetCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type MediaRequirementCreateWithoutCampaignInput = {
    id?: string
    title: string
    description?: string | null
    required?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaRequirementUncheckedCreateWithoutCampaignInput = {
    id?: string
    title: string
    description?: string | null
    required?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaRequirementCreateOrConnectWithoutCampaignInput = {
    where: MediaRequirementWhereUniqueInput
    create: XOR<MediaRequirementCreateWithoutCampaignInput, MediaRequirementUncheckedCreateWithoutCampaignInput>
  }

  export type MediaRequirementCreateManyCampaignInputEnvelope = {
    data: MediaRequirementCreateManyCampaignInput | MediaRequirementCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUpsertWithWhereUniqueWithoutCampaignInput = {
    where: ContentItemWhereUniqueInput
    update: XOR<ContentItemUpdateWithoutCampaignInput, ContentItemUncheckedUpdateWithoutCampaignInput>
    create: XOR<ContentItemCreateWithoutCampaignInput, ContentItemUncheckedCreateWithoutCampaignInput>
  }

  export type ContentItemUpdateWithWhereUniqueWithoutCampaignInput = {
    where: ContentItemWhereUniqueInput
    data: XOR<ContentItemUpdateWithoutCampaignInput, ContentItemUncheckedUpdateWithoutCampaignInput>
  }

  export type ContentItemUpdateManyWithWhereWithoutCampaignInput = {
    where: ContentItemScalarWhereInput
    data: XOR<ContentItemUpdateManyMutationInput, ContentItemUncheckedUpdateManyWithoutCampaignInput>
  }

  export type ContentItemScalarWhereInput = {
    AND?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
    OR?: ContentItemScalarWhereInput[]
    NOT?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
    id?: StringFilter<"ContentItem"> | string
    title?: StringFilter<"ContentItem"> | string
    body?: StringFilter<"ContentItem"> | string
    contentType?: StringFilter<"ContentItem"> | string
    mediaUrl?: StringNullableFilter<"ContentItem"> | string | null
    status?: StringFilter<"ContentItem"> | string
    createdAt?: DateTimeFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItem"> | Date | string
    campaignId?: StringFilter<"ContentItem"> | string
  }

  export type PlanningDocumentUpsertWithWhereUniqueWithoutCampaignInput = {
    where: PlanningDocumentWhereUniqueInput
    update: XOR<PlanningDocumentUpdateWithoutCampaignInput, PlanningDocumentUncheckedUpdateWithoutCampaignInput>
    create: XOR<PlanningDocumentCreateWithoutCampaignInput, PlanningDocumentUncheckedCreateWithoutCampaignInput>
  }

  export type PlanningDocumentUpdateWithWhereUniqueWithoutCampaignInput = {
    where: PlanningDocumentWhereUniqueInput
    data: XOR<PlanningDocumentUpdateWithoutCampaignInput, PlanningDocumentUncheckedUpdateWithoutCampaignInput>
  }

  export type PlanningDocumentUpdateManyWithWhereWithoutCampaignInput = {
    where: PlanningDocumentScalarWhereInput
    data: XOR<PlanningDocumentUpdateManyMutationInput, PlanningDocumentUncheckedUpdateManyWithoutCampaignInput>
  }

  export type PlanningDocumentScalarWhereInput = {
    AND?: PlanningDocumentScalarWhereInput | PlanningDocumentScalarWhereInput[]
    OR?: PlanningDocumentScalarWhereInput[]
    NOT?: PlanningDocumentScalarWhereInput | PlanningDocumentScalarWhereInput[]
    id?: StringFilter<"PlanningDocument"> | string
    name?: StringFilter<"PlanningDocument"> | string
    description?: StringNullableFilter<"PlanningDocument"> | string | null
    fileUrl?: StringFilter<"PlanningDocument"> | string
    fileSize?: IntFilter<"PlanningDocument"> | number
    fileType?: StringFilter<"PlanningDocument"> | string
    uploadedAt?: DateTimeFilter<"PlanningDocument"> | Date | string
    campaignId?: StringFilter<"PlanningDocument"> | string
  }

  export type MediaAssetUpsertWithWhereUniqueWithoutCampaignInput = {
    where: MediaAssetWhereUniqueInput
    update: XOR<MediaAssetUpdateWithoutCampaignInput, MediaAssetUncheckedUpdateWithoutCampaignInput>
    create: XOR<MediaAssetCreateWithoutCampaignInput, MediaAssetUncheckedCreateWithoutCampaignInput>
  }

  export type MediaAssetUpdateWithWhereUniqueWithoutCampaignInput = {
    where: MediaAssetWhereUniqueInput
    data: XOR<MediaAssetUpdateWithoutCampaignInput, MediaAssetUncheckedUpdateWithoutCampaignInput>
  }

  export type MediaAssetUpdateManyWithWhereWithoutCampaignInput = {
    where: MediaAssetScalarWhereInput
    data: XOR<MediaAssetUpdateManyMutationInput, MediaAssetUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MediaAssetScalarWhereInput = {
    AND?: MediaAssetScalarWhereInput | MediaAssetScalarWhereInput[]
    OR?: MediaAssetScalarWhereInput[]
    NOT?: MediaAssetScalarWhereInput | MediaAssetScalarWhereInput[]
    id?: StringFilter<"MediaAsset"> | string
    name?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    fileSize?: IntFilter<"MediaAsset"> | number
    mimeType?: StringFilter<"MediaAsset"> | string
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
    updatedAt?: DateTimeFilter<"MediaAsset"> | Date | string
    campaignId?: StringFilter<"MediaAsset"> | string
  }

  export type MediaRequirementUpsertWithWhereUniqueWithoutCampaignInput = {
    where: MediaRequirementWhereUniqueInput
    update: XOR<MediaRequirementUpdateWithoutCampaignInput, MediaRequirementUncheckedUpdateWithoutCampaignInput>
    create: XOR<MediaRequirementCreateWithoutCampaignInput, MediaRequirementUncheckedCreateWithoutCampaignInput>
  }

  export type MediaRequirementUpdateWithWhereUniqueWithoutCampaignInput = {
    where: MediaRequirementWhereUniqueInput
    data: XOR<MediaRequirementUpdateWithoutCampaignInput, MediaRequirementUncheckedUpdateWithoutCampaignInput>
  }

  export type MediaRequirementUpdateManyWithWhereWithoutCampaignInput = {
    where: MediaRequirementScalarWhereInput
    data: XOR<MediaRequirementUpdateManyMutationInput, MediaRequirementUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MediaRequirementScalarWhereInput = {
    AND?: MediaRequirementScalarWhereInput | MediaRequirementScalarWhereInput[]
    OR?: MediaRequirementScalarWhereInput[]
    NOT?: MediaRequirementScalarWhereInput | MediaRequirementScalarWhereInput[]
    id?: StringFilter<"MediaRequirement"> | string
    title?: StringFilter<"MediaRequirement"> | string
    description?: StringNullableFilter<"MediaRequirement"> | string | null
    required?: BoolFilter<"MediaRequirement"> | boolean
    status?: StringFilter<"MediaRequirement"> | string
    createdAt?: DateTimeFilter<"MediaRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"MediaRequirement"> | Date | string
    campaignId?: StringFilter<"MediaRequirement"> | string
  }

  export type CampaignCreateWithoutContentItemsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    planningDocuments?: PlanningDocumentCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutContentItemsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    planningDocuments?: PlanningDocumentUncheckedCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetUncheckedCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutContentItemsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutContentItemsInput, CampaignUncheckedCreateWithoutContentItemsInput>
  }

  export type CampaignUpsertWithoutContentItemsInput = {
    update: XOR<CampaignUpdateWithoutContentItemsInput, CampaignUncheckedUpdateWithoutContentItemsInput>
    create: XOR<CampaignCreateWithoutContentItemsInput, CampaignUncheckedCreateWithoutContentItemsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutContentItemsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutContentItemsInput, CampaignUncheckedUpdateWithoutContentItemsInput>
  }

  export type CampaignUpdateWithoutContentItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    planningDocuments?: PlanningDocumentUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutContentItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    planningDocuments?: PlanningDocumentUncheckedUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUncheckedUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutPlanningDocumentsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    contentItems?: ContentItemCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutPlanningDocumentsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetUncheckedCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutPlanningDocumentsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutPlanningDocumentsInput, CampaignUncheckedCreateWithoutPlanningDocumentsInput>
  }

  export type CampaignUpsertWithoutPlanningDocumentsInput = {
    update: XOR<CampaignUpdateWithoutPlanningDocumentsInput, CampaignUncheckedUpdateWithoutPlanningDocumentsInput>
    create: XOR<CampaignCreateWithoutPlanningDocumentsInput, CampaignUncheckedCreateWithoutPlanningDocumentsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutPlanningDocumentsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutPlanningDocumentsInput, CampaignUncheckedUpdateWithoutPlanningDocumentsInput>
  }

  export type CampaignUpdateWithoutPlanningDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    contentItems?: ContentItemUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutPlanningDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    contentItems?: ContentItemUncheckedUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUncheckedUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutMediaAssetsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    contentItems?: ContentItemCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutMediaAssetsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentUncheckedCreateNestedManyWithoutCampaignInput
    mediaRequirements?: MediaRequirementUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutMediaAssetsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMediaAssetsInput, CampaignUncheckedCreateWithoutMediaAssetsInput>
  }

  export type CampaignUpsertWithoutMediaAssetsInput = {
    update: XOR<CampaignUpdateWithoutMediaAssetsInput, CampaignUncheckedUpdateWithoutMediaAssetsInput>
    create: XOR<CampaignCreateWithoutMediaAssetsInput, CampaignUncheckedCreateWithoutMediaAssetsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutMediaAssetsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutMediaAssetsInput, CampaignUncheckedUpdateWithoutMediaAssetsInput>
  }

  export type CampaignUpdateWithoutMediaAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    contentItems?: ContentItemUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMediaAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    contentItems?: ContentItemUncheckedUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUncheckedUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutMediaRequirementsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    contentItems?: ContentItemCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutMediaRequirementsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutCampaignInput
    planningDocuments?: PlanningDocumentUncheckedCreateNestedManyWithoutCampaignInput
    mediaAssets?: MediaAssetUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutMediaRequirementsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMediaRequirementsInput, CampaignUncheckedCreateWithoutMediaRequirementsInput>
  }

  export type CampaignUpsertWithoutMediaRequirementsInput = {
    update: XOR<CampaignUpdateWithoutMediaRequirementsInput, CampaignUncheckedUpdateWithoutMediaRequirementsInput>
    create: XOR<CampaignCreateWithoutMediaRequirementsInput, CampaignUncheckedCreateWithoutMediaRequirementsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutMediaRequirementsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutMediaRequirementsInput, CampaignUncheckedUpdateWithoutMediaRequirementsInput>
  }

  export type CampaignUpdateWithoutMediaRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    contentItems?: ContentItemUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMediaRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    contentItems?: ContentItemUncheckedUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUncheckedUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentItems?: ContentItemUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentItems?: ContentItemUncheckedUpdateManyWithoutCampaignNestedInput
    planningDocuments?: PlanningDocumentUncheckedUpdateManyWithoutCampaignNestedInput
    mediaAssets?: MediaAssetUncheckedUpdateManyWithoutCampaignNestedInput
    mediaRequirements?: MediaRequirementUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemCreateManyCampaignInput = {
    id?: string
    title: string
    body: string
    contentType: string
    mediaUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanningDocumentCreateManyCampaignInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type MediaAssetCreateManyCampaignInput = {
    id?: string
    name: string
    url: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaRequirementCreateManyCampaignInput = {
    id?: string
    title: string
    description?: string | null
    required?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanningDocumentUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanningDocumentUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanningDocumentUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaRequirementUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaRequirementUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaRequirementUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}