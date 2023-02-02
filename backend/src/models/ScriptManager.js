const AbstractManager = require("./AbstractManager");

class ScriptManager extends AbstractManager {
  constructor() {
    super({ table: "script" });
  }

  insert(script) {
    return this.connection.query(
      `insert into ${this.table} (title,minplayer,maxplayer,story,planets_id) values (?,?,?,?,?)`,
      [
        script.title,
        script.minplayer,
        script.maxplayer,
        script.story,
        script.planets_id,
      ]
    );
  }

  update(script) {
    return this.connection.query(
      `update ${this.table} set title = ?, minplayer=?, maxplayer=?, story=?, planets_id=? where id = ?`,
      [
        script.title,
        script.minplayer,
        script.maxplayer,
        script.story,
        script.planets_id,
        script.id,
      ]
    );
  }
}

module.exports = ScriptManager;
