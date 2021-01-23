const hre = require('hardhat')

async function main () {
  const ethers = hre.ethers
  const l2ethers = hre.l2ethers

  console.log('network:', await ethers.provider.getNetwork())

  const signer = (await ethers.getSigners())[0]
  console.log('signer:', await signer.getAddress())

  const Greeter = await l2ethers.getContractFactory('Greeter', {
    signer: (await ethers.getSigners())[0]
  })

  const greeter = await Greeter.deploy('Hello, world!')
  await greeter.deployed()

  console.log('Greeter deployed to:', greeter.address)
  console.log(
    'deployed bytecode:',
    await ethers.provider.getCode(greeter.address)
  )
  console.log('greeting:', await greeter.greet())
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
