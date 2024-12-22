/**
 * @copyright 2024 ronafaroni95
 * @license Apache-2.0
 */

/**
 * node modules
 */
import { motion } from 'motion/react';

/**
 * Assets
 */

import { brands } from '@/assets';

/**
 * Framer Motion Variants
 */
import * as Variants from '@/lib/motionVariants';

const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          variants={Variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='text-center mb-4 md:mb-6'
        >
          Powering data insights for today startup and tomorrow's leaders.
        </motion.p>

        <motion.div
          variants={Variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='flex justify-center flex-wrap gap-5 md:gap-10 '
        >
          {brands.map((brand, index) => (
            <motion.figure
              variants={Variants.fadeInUp}
              key={index}
            >
              <motion.img
                src={brand}
                alt={brand}
                className='opacity-[0.6]'
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
