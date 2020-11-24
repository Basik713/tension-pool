class Application {

  constructor(options={}) {

    /**

     * The options provided to this application upon initialization

     * @type {Object}

     */

    this.options = mergeObject(this.constructor.defaultOptions, options, {

      insertKeys: true,

      insertValues: true,

      overwrite: true,

      inplace: false

    });
