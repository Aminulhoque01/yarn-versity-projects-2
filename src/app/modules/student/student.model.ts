import { Model, Schema, model } from 'mongoose';
import { bloodGroup, gender } from './student.constant';
import { IStudent } from './student.interface';

export const studentSchema = new Schema<IStudent, StudentModel>(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          require: true,
        },
        lastName: {
          type: String,
          require: true,
        },
        middleName: {
          type: String,
          require: false,
        },
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: gender,
    },
    bloodGroup: {
      type: String,
      enum: bloodGroup,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    contactNo: {
      type: String,
      unique: true,
      require: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      require: true,
    },
    guardian: {
      require: true,
      type: {
        fatherName: {
          type: String,
          require: true,
        },
        fatherOccupation: {
          type: String,
          require: true,
        },
        fatherContactNo: {
          type: String,
          require: true,
        },
        motherName: {
          type: String,
          require: true,
        },
        motherOccupation: {
          type: String,
          require: true,
        },
        motherContactNo: {
          type: String,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
      },
    },
    localGuardian: {
      required: true,

      type: {
        name: {
          type: String,
          require: true,
        },
        occupation: {
          type: String,
          required: true,
        },
        contactNo: {
          type: String,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
      },
    },

    profileImage: {
      type: String,
      // required:true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      require: true,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
      require: true,
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export const Student = model<IStudent, StudentModel>('Student', studentSchema);
