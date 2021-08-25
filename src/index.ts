#!/usr/bin/env node
import clipboardy from 'clipboardy'
import { Command } from 'commander'

import { getExcuse } from './utils/get-excuse'

async function main() {
  const program = new Command('Excuse Me')
    .description(
      'A simple CLI made on top of developerexcuses.com to provide you an excuse!'
    )
    .option('-c, --copy', 'Copy the excuse to clipboard', false)

  program.parse()

  const options = program.opts<{ readonly copy: boolean }>()
  const excuse = await getExcuse()

  console.log(excuse)

  if (options.copy) {
    clipboardy.writeSync(excuse)
    console.log('[Copied to clipboard]')
  }
}

main()
