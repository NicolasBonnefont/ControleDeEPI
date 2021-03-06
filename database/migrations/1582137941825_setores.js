'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetoresSchema extends Schema {
  up () {
    this.create('setores', (table) => {
      table.increments()
      table.string('Descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('setores')
  }
}

module.exports = SetoresSchema
