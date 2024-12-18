import { z } from 'zod';
// import { bloodGroup, gender } from '../student/student.constant';

// const createStudentZodSchema = z.object({
//   body: z.object({
//     password: z.string().optional(),

//     student: z.object({
//       name: z.object({
//         firstName: z.string({
//           required_error: 'First Name is required',
//         }),
//         middleName: z.string({
//           required_error: 'Middle Name is required',
//         }),
//         lastName: z.string({
//           required_error: 'Last Name is required',
//         }),
//       }),
//       gender: z.enum([...gender] as [string, ...string[]], {
//         required_error: 'Gender is required',
//       }),
//       dateOfBirth: z.string({
//         required_error: 'Date of birth is required',
//       }),
//       email: z.string({ required_error: 'Email is required' }).email(),
//       contactNo: z.string({
//         required_error: 'Contact number is required',
//       }),
//       emergencyContactNo: z.string({
//         required_error: 'Emergency contact number is required',
//       }),
//       bloodGroup: z
//         .enum([...bloodGroup] as [string, ...string[]], {
//           required_error: 'Blood group is required',
//         })
//         .optional(),
//       presentAddress: z.string({
//         required_error: 'present address is required',
//       }),
//       academicSemester: z.string({
//         required_error: 'Academic Semester is required',
//       }),
//       academicDepartment: z.string({
//         required_error: 'Academic department is required',
//       }),
//       academicFaculty: z.string({
//         required_error: 'Academic Faculty is required',
//       }),
//       guardian: z.object({
//         fatherName: z.string({
//           required_error: 'Father Name is required',
//         }),
//         fatherOccupation: z.string({
//           required_error: 'Father Occupation is required',
//         }),
//         fatherContactNo: z.string({
//           required_error: 'Father Contact Number is required',
//         }),
//         motherName: z.string({
//           required_error: 'Mother Name is required',
//         }),
//         motherOccupation: z.string({
//           required_error: 'Mother Occupation is required',
//         }),
//         motherContactNumber: z.string({
//           required_error: 'Mother Contact Number is required',
//         }),
//         address: z.string({
//           required_error: 'Guardian Address is required',
//         }),
//       }),
//       localGuardian: z.object({
//         name: z.string({
//           required_error: 'Local Guardian Name is required',
//         }),
//         occupation: z.string({
//           required_error: 'Local guardian occupation is required',
//         }),
//         contactNo: z.string({
//           required_error: 'Local guardian contact Number is required',
//         }),
//         address: z.string({
//           required_error: 'Local guardian address is required',
//         }),
//       }),
//       profileImage: z.string().optional(),
//     }),
//   }),
// });

const createEventZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    event:z.object({
      eventID:z.number({
        required_error:'Event id is required'
      })
    })

    // faculty: z.object({
    //   name: z.object({
    //     firstName: z.string({
    //       required_error: 'First name is required',
    //     }),
    //     lastName: z.string({
    //       required_error: 'Last name is required',
    //     }),
    //     middleName: z.string().optional(),
    //   }),
    //   gender: z.string({
    //     required_error: 'Gender is required',
    //   }),
    //   dateOfBirth: z.string({
    //     required_error: 'Date of birth is required',
    //   }),
    //   email: z
    //     .string({
    //       required_error: 'Email is required',
    //     })
    //     .email(),
    //   contactNo: z.string({
    //     required_error: 'Contact number is required',
    //   }),
    //   emergencyContactNo: z.string({
    //     required_error: 'Emergency contact number is required',
    //   }),
    //   bloodGroup: z
    //     .string({
    //       required_error: 'Blood group is required',
    //     })
    //     .optional(),
    //   presentAddress: z.string({
    //     required_error: 'Present address is required',
    //   }),
    //   permanentAddress: z.string({
    //     required_error: 'Permanent address is required',
    //   }),
    //   academicDepartment: z.string({
    //     required_error: 'Academic department is required',
    //   }),

    //   academicFaculty: z.string({
    //     required_error: 'Academic faculty is required',
    //   }),
    //   designation: z.string({
    //     required_error: 'Designation is required',
    //   }),
    //   profileImage: z.string().optional(),
    // }),
  }),
});

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    admin: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
        middleName: z.string().optional(),
      }),

      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),

      gender: z.string({
        required_error: 'Gender is required',
      }),

      bloodGroup: z.string({
        required_error: 'Blood group is required',
      }),

      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),

      contactNo: z.string({
        required_error: 'Contact number is required',
      }),

      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),

      presentAddress: z.string({
        required_error: 'Present address is required',
      }),

      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),

      managementDepartment: z.string({
        required_error: 'Management department is required',
      }),

      designation: z.string({
        required_error: 'Designation is required',
      }),

      profileImage: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  createStudentZodSchema,
  createEventZodSchema,
  createAdminZodSchema,
};

//req-validation
//body -->object
//data -->object
