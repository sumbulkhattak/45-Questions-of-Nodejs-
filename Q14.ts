// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArr: string[] = ["Misbah","Sana","Iqra","Kainat"]

guestArr.map((item) => (
    console.log(`Dear ${item}, You Are Invited To A Dinner`)
))
