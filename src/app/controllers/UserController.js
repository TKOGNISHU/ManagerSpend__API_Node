const { User, } = require('../models')
const { Year, Month, SpendType, Spend, SpendGroup, } = require('../schemas')

class UserController {
    // [GET] /api/users -> all years
    get(req, res, next) {}

    // [GET] /api/users/years/:year
    // [GET] /api/users/years/:year/months/:month
    // [GET] /api/users/years/:year/months/:month/spendTypes
    // [GET] /api/users/years/:year/months/:month/spendTypes/:spendType

    // [POST] /api/users/years
    async createYear(req, res, next) {
        try {
            const data = req.body
            const id = data.id
            const user = await User.findById(id)

            const year = new Year({
                value: data.year,
                data: [],
            })

            user.spends.push(year)

            await user.save()

            return res.json({ message: 'Thành Công' })
        } catch (error) {
            return next(error)
        }
    }

    // [POST] /api/users/years/:year/months
    async createMonth(req, res, next) {
        try {
            const data = req.body
            const id = data.id
            const valueYear = req.params.year
            const user = await User.findById(id)

            const year = user.spends.find(year => year.value == valueYear)

            const month = new Month({
                value: data.month,
                data: []
            })
            year.data.push(month)

            await user.save()

            return res.json({ message: 'Thành Công' })
        } catch (error) {
            return next(error)
        }
    }

    // [POST] /api/users/years/:year/months/:month/spendTypes
    async createSpendType(req, res, next) {
        try {
            const data = req.body
            const id = data.id
            const valueYear = req.params.year
            const valueMonth = req.params.month
            const user = await User.findById(id)

            const year = user.spends.find(year => year.value == valueYear)
            const month = year.data.find(month => month.value == valueMonth)

            const spendType = new SpendType({
                name: data.name,
                spendMax: data.spendMax,
                currentSpend: data.currentSpend,
                data: [],
            })

            month.data.push(spendType)

            await user.save()

            return res.json({ message: 'Thành Công' })
        } catch (error) {
            return next(error)
        }
    }

    // [POST] /api/users/years/:year/months/:month/spendTypes/:spendType/spends
    async createSpend(req, res, next) {
        try {
            const data = req.body
            const id = data.id
            const valueYear = req.params.year
            const valueMonth = req.params.month
            const nameSpendType = req.params.spendType
            const user = await User.findById(id)

            const year = user.spends.find(year => year.value == valueYear)
            const month = year.data.find(month => month.value == valueMonth)
            const spendType = month.data.find(spendType => spendType.name == nameSpendType)

            const spend = new Spend({
                name: data.name,
                spend: data.spend,
                unitOfAccount: data.unitOfAccount,
                time: data.time, // cần chuẩn hóa ----------------------------------------
            }) 

            spendType.data.push(spend)

            await user.save()

            return res.json({ message: 'Thành Công' })
        } catch (error) {
            return next(error)
        }
    }

    // [POST] /api/users/years/:year/months/:month/spendTypes/:spendType/spendGroups
    async createSpendGroup(req, res, next) {
        try {
            const data = req.body
            const id = data.id
            const valueYear = req.params.year
            const valueMonth = req.params.month
            const nameSpendType = req.params.spendType
            const user = await User.findById(id)

            const year = user.spends.find(year => year.value == valueYear)
            const month = year.data.find(month => month.value == valueMonth)
            const spendType = month.data.find(spendType => spendType.name == nameSpendType)

            const spendGroup = new SpendGroup({
                name: { type: String, },
                data: [],
                time: data.time, // cần chuẩn hóa ----------------------------------------
            })

            spendType.data.push(spendGroup)

            await user.save()

            return res.json({ message: 'Thành Công' })
        } catch (error) {
            return next(error)
        }
    }

    // [POST] /api/users/years/:year/months/:month/spendTypes/:spendType/spendGroups/:spendGroup/spend
    async createSpendOfGroup(req, res, next) {
        try {
            const data = req.body
            const id = data.id
            const valueYear = req.params.year
            const valueMonth = req.params.month
            const nameSpendType = req.params.spendType
            const user = await User.findById(id)

            const year = user.spends.find(year => year.value == valueYear)
            const month = year.data.find(month => month.value == valueMonth)
            const spendType = month.data.find(spendType => spendType.name == nameSpendType)

            const spendGroup = new SpendGroup({
                name: { type: String, },
                data: [],
                time: data.time, // cần chuẩn hóa ----------------------------------------
            })

            spendType.data.push(spendGroup)

            await user.save()

            return res.json({ message: 'Thành Công' })
        } catch (error) {
            return next(error)
        }
    }

}

module.exports = new UserController
