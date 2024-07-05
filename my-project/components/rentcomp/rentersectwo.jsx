import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import Consult from '../website/consult';

const Rentersectwo = () => {
  return (
    <div className=" bg-gray ">
      <div className="flex flex-col gap-4 p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 ">
        <div className="py-2 md:py-4">
          <p className="text-base md:text-2xl lg;text-2xl">
            Effective California Real Estate Firm Represents Renters in
            Landlord-Tenant Disputes
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl">
            Skilled lawyer assists tenants in the Cerritos area with legal
            issues
          </p>
          <p className="text-xs md:text-xl lg:text-sm xl:text-base">
            People who rent properties to live in or conduct business have
            rights under their lease agreements that must be upheld. As an
            experienced real estate litigator, the attorney with Alpha Advocate
            Law Group PC represents residential and commercial tenants in the
            Cerritos area and throughout California in a wide range of
            landlord-tenant issues. We will ensure that the terms of your lease
            meet state and federal requirements and assist with disputes when
            your rights under the terms of your lease are being violated.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl">
            Experienced real estate counselor handles a range of tasks for
            tenants
          </p>
          <p className="text-xs md:text-xl lg:text-sm xl:text-base">
            We draw upon our substantial knowledge of real estate, contracts and
            property rights to help California tenants:
          </p>
          <ul class="list-disc px-10 text-xs md:text-xl lg:text-sm xl:text-base">
            <li>Review rental leases</li>
            <li>Resolve landlord-tenant disputes</li>
            <li>Defend against unjust evictions</li>
            <li>Uphold their rights against discrimination</li>
          </ul>
          <p className="text-xs md:text-xl lg:text-sm xl:text-base">
            Our attorney is dedicated to ensuring you know your rights as a
            tenant and handling disputes when property owners violate those
            rights.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl">
            Diligent lawyer reviews leases to ensure fairness
          </p>
          <p className="text-xs md:text-xl lg:text-sm xl:text-base">
            Both landlords and tenants can avoid potential problems by having a
            well-drafted lease agreement that enumerates all rental terms. We
            discuss the particulars of a property and its occupancy and ensure
            that your lease covers all aspects of your rental agreement. We want
            you to feel confident that the agreement you sign is in compliance
            with California law and that your rights are protected should a
            dispute arise.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl">
            Proven advocate protects tenants’ rights to security deposits
          </p>
          <p className="text-xs md:text-xl lg:text-sm xl:text-base">
            California law specifies the usage, retention and return of security
            deposits paid by tenants. If your landlord fails to follow these
            regulations, we can help you collect what is due to you. We first
            pursue the most cost-effective route of obtaining payment from your
            landlord but will assertively defend your rights in court when
            necessary.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl">
            Diligent attorney protects tenants in eviction actions
          </p>
          <p className="text-xs md:text-xl lg:text-sm xl:text-base">
            Eviction is disruptive to both the landlord and the tenant.
            Displaced families must locate a new home under traumatic
            circumstances. With this scenario in mind, we help mediate disputes
            when eviction is undesirable. If you are a tenant who unfairly faces
            eviction, we will protect your right to remain in your home.
          </p>
        </div>
      </div>
      <Consult />
    </div>
  );
};

export default Rentersectwo;
