import React from "react";

//types comaparator
type Equals<A, B> = A extends B ? (B extends A ? "succes" : never) : never

type Check = Equals<number, number>
//base type
type Person = {
    name: string
    surname: string
    isOnline: boolean
    permission: number[]
}

//test1
//type that you need to make
type PersonWithNonRequired ={
    name?: string
    surname?: string
    isOnline?: boolean
    permission?: number[]
}

// use utility types to make it equal PersonWithNonRequired
 type FixMePersonWithNonRequired = void

 //shouldPass must be equal "succes"
 type ShouldPass = Equals<PersonWithNonRequired, FixMePersonWithNonRequired>

 