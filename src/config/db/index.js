const mongoose = require('mongoose')

main()
    .then(() => console.log('Successfully connect!'))
    .catch(() => console.log('Failed to connect'))

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connect: main,
}
